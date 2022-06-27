import React from 'react'
import TimerDisplay from '../timerDisplay/timerDisplay'
import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

export default function timer() {
	const [count, setCount] = useState(0)

	// Use useRef for mutable variables that we want to persist
	// without triggering a re-render on their change
	const requestRef = useRef()
	const previousTimeRef = useRef()

	const animate = (time) => {
		console.log(time)
		if (previousTimeRef.current != undefined) {
			const deltaTime = time - previousTimeRef.current

			// Pass on a function to the setter of the state
			// to make sure we always have the latest state
			setCount((prevCount) => (prevCount + deltaTime * 0.01) % 100)
		}
		previousTimeRef.current = time
		requestRef.current = requestAnimationFrame(animate)
	}
	//console.log(Date.now())
	useEffect(() => {
		requestRef.current = requestAnimationFrame(animate)
		return () => cancelAnimationFrame(requestRef.current)
	}, []) // Make sure the effect runs only once

	return (
		<div>
			<TimerDisplay timerNumbers={Math.round(count)} />
		</div>
	)
}
