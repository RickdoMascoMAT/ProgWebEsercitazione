import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { Button } from "../components/Button.tsx";
import { SaveData } from "../components/SaveData.tsx";
import { useState } from "react";
import { clearLoginInfo, loadLoginInfo, type LoginInfo } from "../utils/localStorage.tsx";

function decodeQueryValue(raw?: string): string | undefined {
    if (!raw) return undefined;
    const plusReplaced = raw.replace(/\+/g, " ");
    try {
        return decodeURIComponent(plusReplaced);
    } catch {
        return plusReplaced;
    }
}

function normalizeName(raw?: string): string | undefined {
    return decodeQueryValue(raw);
}

export default function Profile() {
    const navigate = useNavigate();

    const params = useParams<{ name?: string }>();
    const [searchParams, setSearchParams] = useSearchParams();

    const rawFromParam = params.name;
    const rawFromQuery = searchParams.get("name") ?? undefined;
    const rawName = rawFromParam ?? rawFromQuery;
    const name = normalizeName(rawName);

    const rawEmail = searchParams.get("email") ?? undefined;
    const email = decodeQueryValue(rawEmail);

    const [saved, setSaved] = useState<LoginInfo | null>(null);

    const handleLoadSaved = () => {
        const info = loadLoginInfo();
        if (!info) {
            alert("No saved login data");
            return;
        }
        setSaved(info);
    };

    const handleUseSaved = () => {
        if (!saved) return;
        const paramsObj = new URLSearchParams();
        if (saved.name) paramsObj.set("name", saved.name);
        if (saved.email) paramsObj.set("email", saved.email);
        setSearchParams(paramsObj);
        setSaved(null);
    };

    const handleClearSaved = () => {
        clearLoginInfo();
        setSaved(null);
    };

    const hasProfile = Boolean(name || email);

    return (
        <div>
            <h2>{hasProfile ? `Profile of ${name ?? "Unknown"}` : "default profile"}</h2>
            {email && <p>Email: {email}</p>}
            <br />
            <br />

            {hasProfile ? (
                <SaveData
                    name={name}
                    email={email}
                    onSaved={() => {
                        setSaved(loadLoginInfo());
                    }}
                />
            ) : (
                <div style={{ marginTop: 12 }}>
                    <Button label={"Load saved"} onClick={handleLoadSaved} />
                    {saved && (
                        <>
                            <div style={{ marginTop: 8 }}>
                                <strong>Saved:</strong> {saved.name ?? "—"} / {saved.email ?? "—"}
                            </div>
                            <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
                                <Button label={"Use saved"} onClick={handleUseSaved} />
                                <Button label={"Clear saved"} onClick={handleClearSaved} />
                            </div>
                        </>
                    )}
                </div>
            )}

            <br />

            {hasProfile ? (
                <Button label={"LOGOUT"} onClick={() => navigate("/Home")} />
            ) : (
                <Button label={"LOGIN"} onClick={() => navigate("/Login")} />
            )}
        </div>
    );
}
