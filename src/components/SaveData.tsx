import {type ReactElement, useEffect} from "react";
import { useState } from "react";
import { Button } from "./Button.tsx";
import {saveLoginInfo} from "../utils/localStorage.tsx";

interface Props {
    name?: string;
    email?: string;
    onSaved?: () => void;
}

/**
 * SaveData
 *
 * Functional React component that saves login data (name/email) to localStorage.
 *
 * Props:
 * - `name?: string`
 * - `email?: string`
 * - `onSaved?: () => void` callback invoked after successful save (optional)
 *
 * Behavior:
 * - Saves an object `{ name, email, savedAt }` under the key `loginInfo`.
 * - Shows a simple status message: saved / error / nothing.
 *
 * @returns {ReactElement}
 */

export function SaveData({ name, email, onSaved }: Props): ReactElement {
    const [status, setStatus] = useState<"idle" | "saved" | "error">("idle");

    const handleSave = (): void => {
        try {
            if (!name && !email) {
                setStatus("error");
                return;
            }
            saveLoginInfo({ name: name ?? null, email: email ?? null });
            setStatus("saved");
            onSaved?.();
        } catch {
            setStatus("error");
        }
    };

    useEffect(() => {
        if (status !== "saved") return;
        const id = setTimeout(() => setStatus("idle"), 5000);
        return () => clearTimeout(id);
    }, [status]);

    return (
        <div>
            <Button label={"Save Login Info"} onClick={handleSave} />
            <div style={{ marginTop: 8 }}>
                {status === "saved" && <div>Saved</div>}
                {status === "error" && <div style={{ color: "crimson" }}>Error: nothing to save</div>}
            </div>
        </div>
    );
}