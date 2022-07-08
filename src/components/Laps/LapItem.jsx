import React from 'react'
import { getFormattedTime } from '../../utils/Formatter'

export default function LapItem({ lapNumber, lapTime, fast, slow, howManyLaps }) {
	return (
		<div className={`flexLapRow ${howManyLaps > 3 ? (fast === true ? 'lapsFastest' : slow === true ? 'lapslowest' : '') : ''}`}>
			<div className='flexLap'>Lap {lapNumber}</div>
			<div className='flexTime'>{getFormattedTime(lapTime)}</div>
		</div>
	)
}
