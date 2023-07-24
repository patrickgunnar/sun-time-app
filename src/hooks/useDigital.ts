import { create } from "zustand";


interface DigitalStore {
    reset: boolean,
    start: boolean,
    stop: boolean,
    time: string | null
    setReset: (state: boolean) => void,
    setStart: (state: boolean) => void,
    setStop: (state: boolean) => void,
    setTime: (time: string) => void
}

const useDigital = create<DigitalStore>((set) => ({
    reset: false,
    start: false,
    stop: false,
    time: null,
    setReset: (state: boolean) => set({ reset: state, start: false, stop: false }),
    setStart: (state: boolean) => set({ start: state, reset: false, stop: false }),
    setStop: (state: boolean) => set({ stop: state, reset: false, start: false }),
    setTime: (currentTime: string) => set({ time: currentTime })
}))

export default useDigital
