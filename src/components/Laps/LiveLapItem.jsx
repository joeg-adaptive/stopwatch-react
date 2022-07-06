import React from 'react'
import { getFormattedTime } from '../../utils/Formatter'

export default function LiveLapItem({ howManyLaps, calculateCurrentLapTime }) {
	return (
		<div className='flexLapRow'>
			<div className='flexLap'>Lap {howManyLaps}</div>
			<div className='flexTime'>{getFormattedTime(calculateCurrentLapTime())}</div>
		</div>
	)
}
