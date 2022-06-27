import React from 'react'

export default function TimerDisplay({ timerNumbers }) {
	return (
		<div>
			<div>{timerNumbers ? timerNumbers : '00:00.00'}</div>
		</div>
	)
}
