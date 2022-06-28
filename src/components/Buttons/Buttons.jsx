import React from 'react'
import StopWatchContext from '../../StopWatchContext'
import { useContext } from 'react'

export default function Buttons() {
	const { resetLap } = useContext(StopWatchContext)
	const { setResetLap } = useContext(StopWatchContext)
	const { resetLapButton } = useContext(StopWatchContext)
	const { startStop } = useContext(StopWatchContext)
	const { setStartStop } = useContext(StopWatchContext)
	return (
		<div className='stopwatchButtons'>
			<button
				className='reset'
				data-id='resetLap'
				onClick={() => {
					resetLapButton()
				}}
			>
				{resetLap ? 'Lap' : 'Reset'}
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
