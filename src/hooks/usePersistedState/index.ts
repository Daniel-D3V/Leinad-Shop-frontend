import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Response<T> = [T, Dispatch<SetStateAction<T>>];

export default function usePersistedState<T = any>(key: string, initialState: T): [T, (value: T) => void] {
    const [state, setState] = useState(initialState)

    useEffect(() => {
        const item = window.localStorage.getItem(key)
        if (item) {
            setState(JSON.parse(item))
        }
    }, [key])

    const setValue = (value: T) => {
        setState(value)
        window.localStorage.setItem(key, JSON.stringify(value))
    }

    return [state, setValue]
}