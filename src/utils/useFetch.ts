import { useEffect, useRef, useState, useCallback } from 'react';

type UseFetchResult<T> = {
    data: T | null;
    loading: boolean;
    error: Error | null;
    refetch: () => void;
};

export default function useFetch<T = unknown>(
    url: string | null,
    options?: RequestInit,
    deps: unknown[] = []
): UseFetchResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(!!url);
    const [error, setError] = useState<Error | null>(null);
    const refetchIndex = useRef(0);
    const optionsJson = useRef<string | null>(options ? JSON.stringify(options) : null);

    useEffect(() => {
        const next = options ? JSON.stringify(options) : null;
        if (next !== optionsJson.current) optionsJson.current = next;
    }, [options]);

    const refetch = useCallback(() => {
        refetchIndex.current += 1;
    }, []);

    useEffect(() => {
        if (!url) {
            setData(null);
            setLoading(false);
            setError(null);
            return;
        }

        const safeUrl = url; // narrowed to string after the guard

        const controller = new AbortController();
        const signal = controller.signal;
        let cancelled = false;

        async function doFetch() {
            setLoading(true);
            setError(null);
            try {
                const mergedOptions: RequestInit = { ...(options || {}), signal };
                const res = await fetch(safeUrl, mergedOptions);
                if (!res.ok) throw new Error(`Network response was not ok (${res.status})`);
                const json = (await res.json()) as T;
                if (!cancelled) setData(json);
            } catch (e) {
                if ((e as DOMException)?.name === 'AbortError') {
                    // request was aborted, ignore
                    return;
                }
                if (!cancelled) setError(e as Error);
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        doFetch();

        return () => {
            cancelled = true;
            controller.abort();
        };
    }, [url, refetchIndex.current, optionsJson.current, ...deps]);

    return { data, loading, error, refetch };
}
