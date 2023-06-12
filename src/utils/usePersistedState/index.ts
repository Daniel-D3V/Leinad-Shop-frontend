import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export default function usePersistedState<T = any>(key: string, initialState: T): Response<T> {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        setState(() => {
            const storageValue = localStorage.getItem(key);
            if (storageValue) return JSON.parse(storageValue)
            return initialState
        })

        localStorage.setItem(key, JSON.stringify(state))
    }, [key, state])

    return [state, setState]
}