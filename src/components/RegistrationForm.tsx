import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loadLoginInfo } from "../utils/localStorage.tsx";

/**
 * RegistrationForm
 *
 * Simple registration form with Name and Email. On submit it validates fields and navigates
 * to `/Profile` with the values encoded in the query string.
 */

export default function RegistrationForm() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!name.trim() || !email.trim()) {
            alert("Fill in all the fields");
            return;
        }

        const params = new URLSearchParams({
            name: name.trim(),
            email: email.trim(),
        });
        navigate(`/Profile?${params.toString()}`);
    };

    const handleLoadSaved = () => {
        const info = loadLoginInfo();
        if (!info) {
            alert("No saved login data");
            return;
        }
        setName(info.name ?? "");
        setEmail(info.email ?? "");
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registration Module</h2>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <br/>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            <br/>
            <button type="submit">Send</button>
            <button type="button" onClick={handleLoadSaved} style={{ marginLeft: 8 }}>
                Load saved
            </button>
        </form>
    );
}
