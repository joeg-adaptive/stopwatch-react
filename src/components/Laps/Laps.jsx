import LapItem from './LapItem'
import LiveLapItem from './LiveLapItem'
import BlankLaps from './BlankLaps'
import './Laps.css'

export default function Laps({ lapItems, stopWatchTime, fastestLap, slowestLap }) {
	//console.log(lapItems)
	return (
		<div className='stopWatchLaps'>
			{stopWatchTime > 0 ? <LiveLapItem lapItems={lapItems} stopWatchTime={stopWatchTime} /> : <></>}
			{lapItems &&
				lapItems.map((lap) => (
					<LapItem
						key={lap.lapNumber}
						lapNumber={lap.lapNumber}
						slow={lap.lapNumber === slowestLap.lapNumber ? true : false}
						fast={lap.lapNumber === fastestLap.lapNumber ? true : false}
						lapTime={lap.time}
						howManyLaps={lapItems?.length + 1}
					/>
				))}
			{Array.from({ length: 8 - lapItems?.length }, (_, index) => (
				<BlankLaps key={index} />
			))}
		</div>
	)
}
