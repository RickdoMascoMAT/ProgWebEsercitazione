import { useEffect, useState } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

export default function UserList() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;

        async function fetchUsers() {
            try {
                setLoading(true);
                setError(false);
                const res = await fetch('https://jsonplaceholder.typicode.com/users', { signal });
                if (!res.ok) throw new Error('Network response was not ok');
                const data: User[] = await res.json();
                setUsers(data);
            } catch (e) {
                if ((e as DOMException)?.name === 'AbortError') return;
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
        return () => controller.abort();
    }, []);

    if (loading) return <div>Caricamento...</div>;
    if (error) return <div>Errore!</div>;

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}