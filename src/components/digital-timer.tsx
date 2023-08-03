import DigitalTopbar from "./digital-topbar";
import DigitalClock from "./digital-clock";
import { DateTime } from "luxon";
import { useCallback, useRef, useState } from "react";
import useDigitalTimer from "../hooks/useDigitalTimer";


const DigitalTimer = () => {
    // get digital hook
    const { time, setTime } = useDigitalTimer()

    // save interval
    const currentIntervalRef = useRef<NodeJS.Timer | null>(null)
    // start timer time
    const currentStartTimeRef = useRef<DateTime | null>(null)
    // currentRunningRef
    const currentRunningRef = useRef<boolean>(false)

    // current display value
    const [displayValue, setDisplayValue] = useState<string>('00:00:00')
    // input reset
    const [isReset, setIsReset] = useState<boolean>(false)

    // timer stop handler
    const handleTimerStop = useCallback(() => {
        if(currentRunningRef.current) {
            // clear interval
            clearInterval(currentIntervalRef.current ?? undefined)
            // set currentRunningRef to false
            currentRunningRef.current = false
        }
    }, [currentRunningRef])

    // timer update handler
    const handleTimerUpdate = useCallback(() => {
        if(currentStartTimeRef.current && time) {
            // get local datetime milliseconds
            const currentTime = DateTime.local()
            // get remaining duration
            const remainingTime = currentStartTimeRef.current.diff(currentTime)

            if(remainingTime.as('milliseconds') <= 0) {
                // stop timer
                handleTimerStop()
                // set display value
                setDisplayValue('End Timer!')

                return
            }

            // set display value
            setDisplayValue(remainingTime.toFormat('hh:mm:ss'))
        }
    }, [time, currentStartTimeRef, handleTimerStop])

    // timer reset handler
    const handleTimerReset = useCallback(() => {
        // stop timer
        handleTimerStop()
        // set time to 0
        setTime(0, 0, 0)
        // reset input
        setIsReset(true)
        // reset display value
        setDisplayValue('00:00:00')
    }, [handleTimerStop, setTime])

    // timer start handler
    const handleTimerStart = useCallback(() => {
        if(time && !currentRunningRef.current) {
            // reset input
            setIsReset(false)
            // set start time
            currentStartTimeRef.current = DateTime.local().plus(time)
            // set currentRunningRef to true
            currentRunningRef.current = true
            // set interval
            currentIntervalRef.current = setInterval(() => handleTimerUpdate(), 100)
        }
    }, [time, currentRunningRef, handleTimerUpdate])

    return (
        <>
            <DigitalTopbar isTimer isReset={isReset}
                handleTimerReset={handleTimerReset} 
                handleTimerStart={handleTimerStart} 
                handleTimerStop={handleTimerStop} 
            />
			<DigitalClock displayValue={displayValue} />
        </>
    );
}
 
export default DigitalTimer;
