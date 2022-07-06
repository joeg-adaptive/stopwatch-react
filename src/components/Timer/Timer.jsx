import React from 'react'
import { getFormattedTime } from '../../utils/Formatter'

export default function Timer({ stopWatchTime }) {
	return (
		<div className='stopwatchTime'>
			<span id='stopWatchClock' data-id='stopWatchClock'>
				<div>{stopWatchTime ? getFormattedTime(stopWatchTime) : '00:00.00'}</div>
			</span>
		</div>
	)
}
