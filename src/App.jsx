import { useEffect, useState } from 'react'
import Timer from './components/Timer/Timer.jsx'
import Buttons from './components/Buttons/Buttons.jsx'
import Laps from './components/Laps/Laps.jsx'

function App() {
	const [startStop, setStartStop] = useState(false)
	const [resetLap, setResetLap] = useState(false)
	const [stopwatchTime, setstopwatchTime] = useState(0)
	const [previousTime, setPreviousTime] = useState(0)
	const[ lapNumber, setLapNumber] = useState(0)
	const[ lapTime, setLapTime] = useState(0)

	useEffect(() => {
		if (startStop) {
			setLapNumber(lapNumber+1);
			setLapTime(stopwatchTime)
			

		} else {
			setstopwatchTime(0)
			setPreviousTime(0)
		}
	}, [resetLap])

	return (
		<main className='stopwatchBody'>
			<Timer stopwatchTime={stopwatchTime} />
			<Buttons
				startStop={startStop}
				setStartStop={setStartStop}
				resetLap={resetLap}
				setResetLap={setResetLap}
				setstopwatchTime={setstopwatchTime}
				previousTime={previousTime}
				setPreviousTime={setPreviousTime}
			/>
			<Laps lapNumber={lapNumber} lapTime = {lapTime} stopwatchTime={stopwatchTime}  />
		</main>
	)
}

export default App
