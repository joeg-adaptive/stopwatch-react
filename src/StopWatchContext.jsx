import { createContext, useState, useEffect, useRef } from 'react'
import { getFormattedTime } from './utils/Formatter'

const StopWatchContext = createContext()

export function StopWatchProvider({ children }) {
	const [startStop, setStartStop] = useState(false)
	const [resetLap, setResetLap] = useState(false)
	const [stopwatchTime, setstopwatchTime] = useState(0)
	const [previousTime, setPreviousTime] = useState(0)

	const requestRef = useRef()
	const previousTimeRef = useRef()
	const start = Date.now()

	const stopwatchClock = () => {
		if (previousTimeRef.current != undefined) {
			setstopwatchTime(getFormattedTime(Date.now() - start + previousTime))
		}
		setPreviousTime(Date.now() - start + previousTime)
		previousTimeRef.current = start
		requestRef.current = requestAnimationFrame(stopwatchClock)
	}

	useEffect(() => {
		if (startStop) {
			requestRef.current = requestAnimationFrame(stopwatchClock)
			return () => cancelAnimationFrame(requestRef.current)
		}
		console.log(startStop)
	}, [startStop])

	const resetLapButton = () => {
		if (startStop) {
			//lap
			console.log('lap')
			console.log(stopwatchTime)
		} else {
			//reset
			console.log('reset')
			setstopwatchTime(0)
			setPreviousTime(0)
		}
	}

	return (
		<StopWatchContext.Provider
			value={{ stopwatchTime, setstopwatchTime, startStop, setStartStop, resetLap, resetLapButton }}
		>
			{children}
		</StopWatchContext.Provider>
	)
}

export default StopWatchContext
