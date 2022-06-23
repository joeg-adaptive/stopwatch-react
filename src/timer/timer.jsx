import React from 'react'
import TimerDisplay from '../timerDisplay/timerDisplay'
import { useState } from 'react'

export default function timer() {
	const [timerNumbers, setTimerNumbers] = useState('hello')
	return (
		<div>
			<TimerDisplay timerNumbers={timerNumbers} />
		</div>
	)
}
