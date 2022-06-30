import React from 'react'

export default function LapItem({ lapNumber, lapTime }) {
	return (
		<div className='flexLapRow'>
			<div className='flexLap'>Lap {lapNumber}</div>
			<div className='flexTime'>{lapTime}</div>
		</div>
	)
}
