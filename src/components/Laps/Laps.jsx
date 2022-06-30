import { useState, useEffect } from 'react'
import LapItem from './LapItem'
import LiveLapItem from './LiveLapItem'

export default function Laps({ lapNumber, lapTime, stopwatchTime, startStop, resetLap }) {
	const [didStart, setDidStart] = useState(false)
	const [lapItems, setLapItems] = useState([{}])

	useEffect(() => {
		setLapItems([{ lap: lapNumber, time: lapTime }, ...lapItems])
	}, [lapNumber])

	const checkLaps = (lap) => {
		if (lap.lap != null && lap.time != '0') {
			return lap
		}
	}
	useEffect(() => {
		if (startStop) {
			setDidStart(true)
		}
	}, [startStop])

	useEffect(() => {
		if (resetLap && !startStop) {
			setLapItems([{}])
		}
	}, [resetLap])

	return (
		<div className='stopWatchLaps' data-id='stopWatchLaps'>
			{didStart ? <LiveLapItem lapNumber={lapNumber} lapTime={stopwatchTime} /> : <></>}
			{lapItems.filter(checkLaps).map((lap) => (
				<LapItem key={lap.lap} lapNumber={lap.lap} lapTime={lap.time} />
			))}
		</div>
	)
}
