import { useEffect, useState } from "react";

export const usePersistedState = (key: string, initialState: any) => {
    const [state, setState] = useState(initialState)

    useEffect(() => {
        setState(() => {
            const storageValue = localStorage.getItem(key)

            if (storageValue) return JSON.parse(storageValue);

            return initialState;
        })

    }, [key, initialState])

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state))
    }, [state, setState])

    return [state, setState];
}