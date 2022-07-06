import React from 'react'

export default function Buttons({ onLapButtonClick, onStartButtonClick, isTimerRunning }) {
	return (
		<div className='stopwatchButtons'>
			<button className='reset' onClick={() => onLapButtonClick()}>
				{isTimerRunning ? 'Lap' : 'Reset'}
			</button>
			<button
				className={isTimerRunning ? 'stop' : 'start'}
				onClick={() => onStartButtonClick()}
			>
				{isTimerRunning ? 'Stop' : 'Start'}
			</button>
		</div>
	)
}
