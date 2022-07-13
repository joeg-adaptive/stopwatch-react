import React from 'react'
import { getFormattedTime } from '../../utils/Formatter'

export default function LapItem({ lapNumber, lapTime, slow, fast, howManyLaps }) {
	return (
		<div className={`flexLapRow ${howManyLaps > 3 ? (fast === true ? 'lapsFastest' : slow === true ? 'lapsSlowest' : '') : ''}`}>
			<div className='flexLap'>Lap {lapNumber}</div>
			<div className='flexTime'>{getFormattedTime(lapTime)}</div>
		</div>
	)
}
