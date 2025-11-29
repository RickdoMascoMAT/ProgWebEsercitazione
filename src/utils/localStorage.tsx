export type LoginInfo = {
    name?: string | null;
    email?: string | null;
    savedAt?: string;
};

export function saveLoginInfo(info: { name?: string | null; email?: string | null }): void {
    const payload: LoginInfo = { ...info, savedAt: new Date().toISOString() };
    localStorage.setItem("loginInfo", JSON.stringify(payload));
}

export function loadLoginInfo(): LoginInfo | null {
    const raw = localStorage.getItem("loginInfo");
    if (!raw) return null;
    try {
        return JSON.parse(raw) as LoginInfo;
    } catch {
        return null;
    }
}

export function clearLoginInfo(): void {
    localStorage.removeItem("loginInfo");
}