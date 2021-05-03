import { render } from '@testing-library/react'
import React, { useState, useEffect } from 'react'

interface TimerProps {
    resetTimer: boolean
}

export const Timer: React.FC<TimerProps> = props => {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        setSeconds(seconds => seconds = 0)
    }, [props.resetTimer])
    
    useEffect(() => {
        let interval = setInterval(() => {
            setSeconds(seconds => seconds + 1)
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [seconds])

    const formatTime = (seconds: number) => {
        if (seconds === 0) return '00:00'
        let min = Math.floor(seconds / 60)
        let sec = seconds % 60
        return `${min}:${sec}`
    }

    return (
        <div>
            <text>
                Time: {formatTime(seconds)}
            </text>
        </div>
    )
}
