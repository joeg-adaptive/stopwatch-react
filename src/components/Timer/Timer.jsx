import React from 'react'
import { getFormattedTime } from '../../utils/Formatter'

export default function Timer({ stopWatchTime }) {
	return (
		<div className='stopwatchTime'>
			<div className='stopwatchClock'>{stopWatchTime ? getFormattedTime(stopWatchTime) : '00:00.00'}</div>
		</div>
	)
}
