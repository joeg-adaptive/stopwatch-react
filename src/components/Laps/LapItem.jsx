import { useEffect } from 'react'
import React from 'react'

export default function LapItem({ lapNumber, lapTime }) {
    // useEffect(()=>{
    //     console.log(lapNumber,lapTime)
    // },[lapNumber,lapTime])
	return (
		<div className='flexLapRow'>
			<div className='flexLap'>{lapNumber}</div>
			<div className='flexTime'>{lapTime}</div>
		</div>
	)
}
