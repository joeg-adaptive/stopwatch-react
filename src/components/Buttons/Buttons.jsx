import React from 'react'
import { useEffect, useRef } from 'react'
import { getFormattedTime } from '../../utils/Formatter'

export default function Buttons({
	startStop,
	setStartStop,
	resetLap,
	setResetLap,
	setstopwatchTime,
	previousTime,
	setPreviousTime,
}) {
	const requestRef = useRef()
	const previousTimeRef = useRef()
	const start = Date.now()
	const stopwatchClock = () => {
		if (previousTimeRef.current != undefined) {
			setstopwatchTime(getFormattedTime(Date.now() - start + previousTime))
		}
		setPreviousTime(Date.now() - start + previousTime)
		previousTimeRef.current = start
	}
	useEffect(() => {
		if (startStop) {
			requestRef.current = setInterval(stopwatchClock)
			return () => clearInterval(requestRef.current)
		}
	}, [startStop])

	return (
		<div className='stopwatchButtons'>
			<button
				className='reset'
				data-id='resetLap'
				onClick={() => {
					setResetLap(!resetLap)
				}}
			>
				{startStop ? 'Lap' : 'Reset'}
			</button>
			<button
				className={startStop ? 'stop' : 'start'}
				data-id='startStop'
				onClick={() => {
					setStartStop(!startStop)
				}}
			>
				{startStop ? 'Stop' : 'Start'}
			</button>
		</div>
	)
}
