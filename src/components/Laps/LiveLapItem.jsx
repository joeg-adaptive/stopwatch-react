import React from 'react'

export default function LiveLapItem({ lapNumber, lapTime }) {
  return (
    <div className='flexLapRow'>
			<div className='flexLap'>{lapNumber + 1}</div>
			<div className='flexTime'>{lapTime?lapTime : '00:00.00'}</div>
		</div>
  )
}
