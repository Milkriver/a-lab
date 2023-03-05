export const setValue = (key: string, value: any) => {
    window.localStorage.setItem(key, JSON.stringify(value));
}

export const getValue = (key: string) => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : undefined;
}