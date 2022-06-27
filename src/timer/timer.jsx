import React from 'react'
import TimerDisplay from '../timerDisplay/timerDisplay'
import { useState, useRef, useEffect } from 'react'
import { getFormattedTime } from '../utils.js/formatter'

export default function Timer({ startStop }) {
	const [count, setCount] = useState(0)
	const [previousTime, setPreviousTime] = useState(0)

	// Use useRef for mutable variables that we want to persist
	// without triggering a re-render on their change
	const requestRef = useRef()
	const previousTimeRef = useRef()
	const start = Date.now()

	const animate = () => {
		if (previousTimeRef.current != undefined) {
			setCount(getFormattedTime(Date.now() - start + previousTime))
		}
		setPreviousTime(Date.now() - start + previousTime)
		previousTimeRef.current = start
		requestRef.current = requestAnimationFrame(animate)
	}
	useEffect(() => {
		if (startStop) {
			requestRef.current = requestAnimationFrame(animate)
			return () => cancelAnimationFrame(requestRef.current)
		}
	}, [startStop]) // Make sure the effect runs only once

	return (
		<div>
			<TimerDisplay timerNumbers={count} />
		</div>
	)
}
