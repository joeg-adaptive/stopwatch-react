export default function Timer({ stopwatchTime }) {
	return (
		<div className='stopwatchTime'>
			<span id='stopWatchClock' data-id='stopWatchClock'>
				<div>{stopwatchTime ? stopwatchTime : '00:00.00'}</div>
			</span>
		</div>
	)
}
