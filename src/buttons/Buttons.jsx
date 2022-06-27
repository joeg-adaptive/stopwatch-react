import React from 'react'
import { useEffect } from 'react'

export default function Buttons({ startStop, setStartStop, resetLap, setResetLap }) {
	let startStopButton = startStop ? (
		<button className='stop' data-id='startStop' onClick={() => setStartStop(!startStop)}>
			Stop
		</button>
	) : (
		<button className='stop' data-id='startStop' onClick={() => setStartStop(!startStop)}>
			Start
		</button>
	)
	return (
		<div className='stopwatchButtons'>
			<button className='reset' data-id='resetLap' onClick={() => setResetLap(!resetLap)}>
				Reset
			</button>
			{startStopButton}
		</div>
	)
}
