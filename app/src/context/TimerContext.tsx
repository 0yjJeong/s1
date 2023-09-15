import React, { useContext, useEffect, useRef, useState } from 'react'

interface TimerProvider {
    ms: number
}

const TimerContext = React.createContext<TimerProvider | null>(null)

export const useTimer = () => {
    const timer = useContext(TimerContext)
    if (!timer) {
        throw new Error('No timer context available')
    }
    return timer
}

type TimerContextProviderProps = {
    ms?: number
    children?: JSX.Element
}

export const TimerProvider: React.FC<TimerContextProviderProps> = ({ ms = 1000, children }) => {
    const [_, setNumber] = useState(0)
    const timerRef = useRef<NodeJS.Timer>()
    const timeRef = useRef(0)

    useEffect(() => {
        timerRef.current = setInterval(() => {
            timeRef.current = timeRef.current + 1000
            setNumber(timeRef.current)
        }, ms)

        return () => clearInterval(timerRef.current)
    }, [])

    return <TimerContext.Provider value={{ ms: timeRef.current }}>{children}</TimerContext.Provider>
}
