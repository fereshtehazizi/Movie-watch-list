import { useEffect, useState } from "react";

/**
 * Keeps a piece of React state in sync with localStorage so it survives
 * page refreshes and the browser being closed.
 *
 * @param {string} key - The localStorage key to store the value under.
 * @param {*} initialValue - Value used when nothing (valid) is stored yet.
 * @returns {[*, function]} [value, setValue] - Same API as useState.
 */
export default function useLocalStorageState(key, initialValue) {
    const [value, setValue] = useState(() => {
        try {
            const stored = localStorage.getItem(key);
            // null means "no value saved yet" — fall back to the initial value.
            return stored !== null ? JSON.parse(stored) : initialValue;
        } catch (error) {
            // Corrupted JSON, storage disabled, etc. — don't crash the app.
            console.warn(`Could not read "${key}" from localStorage:`, error);
            return initialValue;
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            // Usually QuotaExceededError (storage full) or private browsing.
            console.warn(`Could not save "${key}" to localStorage:`, error);
        }
    }, [key, value]);

    return [value, setValue];
}
