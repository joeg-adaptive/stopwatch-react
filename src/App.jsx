import { useEffect, useState } from 'react'
import Timer from './components/Timer/Timer.jsx'
import Buttons from './components/Buttons/Buttons.jsx'
import Laps from './components/Laps/Laps.jsx'

function App() {
	//isTiming
	//time
	//totalLapCount
	//laptime
	//maxLap
	//minLap
	//both are the only sync'd state you should need all other state can be derived
	//
	const [isTimerRunning, setIsTimerRunning] = useState(false)
	const [startStop, setStartStop] = useState(false)
	const [resetLap, setResetLap] = useState(false)
	const [stopwatchTime, setstopwatchTime] = useState(0)
	const [previousTime, setPreviousTime] = useState(0)
	const [lapNumber, setLapNumber] = useState(0)
	const [lapTime, setLapTime] = useState(0)

	useEffect(() => {
		if (startStop) {
			setLapNumber(lapNumber + 1)
			setLapTime(stopwatchTime)
		} else {
			setstopwatchTime(0)
			setPreviousTime(0)
		}
	}, [resetLap])

	return (
		<main className='stopwatchBody'>
			<Timer
				stopwatchTime={stopwatchTime}
				isTimerRunning={isTimerRunning}
				setIsTimerRunning={setIsTimerRunning}
			/>
			<Buttons
				startStop={startStop}
				setStartStop={setStartStop}
				resetLap={resetLap}
				setResetLap={setResetLap}
				setstopwatchTime={setstopwatchTime}
				isTimerRunning={isTimerRunning}
				setIsTimerRunning={setIsTimerRunning}
				previousTime={previousTime}
				setPreviousTime={setPreviousTime}
			/>
			<Laps
				lapNumber={lapNumber}
				lapTime={lapTime}
				isTimerRunning={isTimerRunning}
				setIsTimerRunning={setIsTimerRunning}
				stopwatchTime={stopwatchTime}
				startStop={startStop}
				resetLap={resetLap}
			/>
		</main>
	)
}

export default App
