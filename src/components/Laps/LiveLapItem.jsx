import React from 'react'
import { getFormattedTime } from '../../utils/Formatter'

export default function LiveLapItem({ stopWatchTime, lapItems }) {
	return (
		<div className='flexLapRow'>
			<div className='flexLap'>Lap {lapItems.length + 1}</div>
			<div className='flexTime'>
				{getFormattedTime(stopWatchTime - lapItems.reduce((accumulater, lap) => accumulater + lap.time, 0))}
			</div>
		</div>
	)
}
