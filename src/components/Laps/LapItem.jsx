import React from 'react'
import { getFormattedTime } from '../../utils/Formatter'

export default function LapItem({ lapNumber, lapTime, fastOrSlow, howManyLaps }) {
	return (
		<div
			className={`flexLapRow ${
				howManyLaps > 3 ? (fastOrSlow === 'fast' ? 'lapsFastest' : fastOrSlow === 'slow' ? 'lapslowest' : '') : ''
			}`}
		>
			<div className='flexLap'>Lap {lapNumber}</div>
			<div className='flexTime'>{getFormattedTime(lapTime)}</div>
		</div>
	)
}
