import { useCallback, useRef, useState } from "react";
import DigitalClock from "./digital-clock";
import DigitalTopbar from "./digital-topbar";
import { DateTime, Interval } from "luxon";


const DigitalStopwatch = () => {
    // save interval
    const currentIntervalRef = useRef<NodeJS.Timer | null>(null)
    // start timer time
    const currentStartTimeRef = useRef<DateTime | null>(null)
    // currentRunningRef
    const currentRunningRef = useRef<boolean>(false)
    // elapsed time
    const currentElapsedTimeRef = useRef<number>(0)

    // current display value
    const [displayValue, setDisplayValue] = useState<string>('00:00:00')

    // stopwatch update handler
    const handleUpdate = useCallback(() => {
        if(currentStartTimeRef.current && currentElapsedTimeRef.current >= 0) {
            const { 
                hours = 0, 
                minutes = 0, 
                seconds = 0, 
                milliseconds = 0
             } = Interval.fromDateTimes(
                currentStartTimeRef.current, DateTime.now()
            ).toDuration(['hours', 'minutes', 'seconds', 'milliseconds']).toObject()

            currentElapsedTimeRef.current = (
                hours * 3600000 + minutes * 60000 + seconds * 1000 + milliseconds
            )

            setDisplayValue(
                Interval.fromDateTimes(
                    DateTime.fromMillis(0), DateTime.fromMillis(currentElapsedTimeRef.current)
                ).toDuration().toFormat('hh:mm:ss')
            )
        }
    }, [])

    // stopwatch start handler
    const handleStartStopwatch = useCallback(() => {
        if(!currentRunningRef.current) {
            // set current start time
            currentStartTimeRef.current = currentElapsedTimeRef.current ? DateTime.now().minus(currentElapsedTimeRef.current) : DateTime.now()
            // set currentRunningRef to true
            currentRunningRef.current = true
            // set interval
            currentIntervalRef.current = setInterval(() => handleUpdate(), 10)
        }
    }, [handleUpdate])

    // stopwatch stop handler
    const handleStopStopwatch = useCallback(() => {
        if(currentRunningRef.current) {
            // clear interval
            clearInterval(currentIntervalRef.current ?? undefined)
            // set currentRunningRef to false
            currentRunningRef.current = false
        }
    }, [])

    // stopwatch reset handler
    const handleResetStopwatch = useCallback(() => {
        // stop the watch
        handleStopStopwatch()
        // reset display value
        setDisplayValue('00:00:00')
        // reset elapsed time
        currentElapsedTimeRef.current = 0
    }, [handleStopStopwatch])

    return (
        <>
			<DigitalTopbar 
                handleReset={handleResetStopwatch} 
                handleStart={handleStartStopwatch} 
                handleStop={handleStopStopwatch} />
			<DigitalClock displayValue={displayValue} />
		</>
    );
}
 
export default DigitalStopwatch;
