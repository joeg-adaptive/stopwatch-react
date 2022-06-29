import { useState,useEffect } from 'react'
import LapItem from './LapItem'
import LiveLapItem from './LiveLapItem'

export default function Laps({ lapNumber,lapTime, stopwatchTime }) {
    const [lapItems, setLapItems] = useState([{}])
    const [lastLapTime,setLastLapTime]=useState()
    useEffect(()=>{
        setLapItems([{lap:lapNumber,time:lapTime},...lapItems])
        // {lapItems && lapItems.slice(0).reverse().map(lap =>
        // console.log(`test ${lap.lap} ${lap.time}`)
        // )}
    },[lapNumber])
    const checkLaps = lap =>{
        if (lap.lap != null&& lap.time !='0'){
            return lap
        }
    }

	return (
		<div className='stopWatchLaps' data-id='stopWatchLaps'>
                <LiveLapItem lapNumber={lapNumber} lapTime={stopwatchTime} />
                {lapItems.filter(checkLaps).map(lap =>
				    <LapItem key={lap.lap} lapNumber={lap.lap} lapTime={lap.time} />
                )}
		</div>
	)
}

