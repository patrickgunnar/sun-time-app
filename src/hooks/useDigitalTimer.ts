import { Duration } from "luxon";
import { create } from "zustand";


interface DigitalTimerStore {
    time: Duration
    setTime: (hours: number, minutes: number, seconds: number) => void
}

const useDigitalTimer = create<DigitalTimerStore>((set) => ({
    time: Duration.fromObject({ hours: 0, minutes: 0, seconds: 0}),
    setTime: (hours: number, minutes: number, seconds: number) => set({
        time: Duration.fromObject({
            hours: hours, minutes: minutes, seconds: seconds
        })
    })
}))

export default useDigitalTimer
