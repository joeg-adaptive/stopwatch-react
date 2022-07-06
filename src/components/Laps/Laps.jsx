import LapItem from './LapItem'
import LiveLapItem from './LiveLapItem'
import BlankLaps from './BlankLaps'

export default function Laps({ calculateCurrentLapTime, lapItems, stopWatchTime }) {
	return (
		<div className='stopWatchLaps' data-id='stopWatchLaps'>
			{stopWatchTime > 0 ? (
				<LiveLapItem howManyLaps={lapItems.length + 1} calculateCurrentLapTime={calculateCurrentLapTime} />
			) : (
				<></>
			)}
			{lapItems.map((lap) => (
				<LapItem
					key={lap.lap}
					lapNumber={lap.lap}
					lapTime={lap.time}
					fastOrSlow={lap.fastOrSlow}
					howManyLaps={lapItems.length + 1}
				/>
			))}
			{Array.from({ length: 8 - lapItems.length }, () => (
				<BlankLaps />
			))}
		</div>
	)
}
// lapItems.length < 9 ?
