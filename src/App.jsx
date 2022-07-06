import { useState, useEffect } from 'react'
import Timer from './components/Timer/Timer.jsx'
import Buttons from './components/Buttons/Buttons.jsx'
import Laps from './components/Laps/Laps.jsx'

//invisible laps on initilization
//replace previousTime

function App() {
	const [isTimerRunning, setIsTimerRunning] = useState(false)
	const [stopWatchTime, setStopWatchTime] = useState(0)
	const [previousTime, setPreviousTime] = useState(0)
	const [lapItems, setLapItems] = useState([])
	const [fastestAndSlowestLapTime, setFastestAndSlowestLapTime] = useState([])

	let startTime = Date.now()
	useEffect(() => {
		if (isTimerRunning) {
			const intervalId = setInterval(() => {
				setStopWatchTime(Date.now() - (startTime - previousTime))
			}, 1000 / 16)
			return () => clearInterval(intervalId)
		}
	}, [isTimerRunning, previousTime])

	//onStart
	const onStartButtonClick = () => {
		setIsTimerRunning(!isTimerRunning)
		if (!isTimerRunning) {
			setPreviousTime(stopWatchTime)
		}
	}
	//onLap
	const onLapButtonClick = () => {
		if (isTimerRunning) {
			incrementLaps()
		} else {
			setPreviousTime(0)
			setStopWatchTime(0)
			setLapItems([])
			setFastestAndSlowestLapTime([])
		}
	}
	const calculateCurrentLapTime = () => {
		let cumulativeLapTime = 0
		lapItems.forEach((lap) => (cumulativeLapTime += lap.time))
		return stopWatchTime - cumulativeLapTime
	}
	const incrementLaps = () => {
		let lapNumber = lapItems.length + 1
		let lapTime = calculateCurrentLapTime()
		let fastOrSlow = findFastestAndSlowestLap(lapTime, lapNumber)
		setLapItems([{ lap: lapNumber, time: lapTime, fastOrSlow: fastOrSlow }, ...lapItems])
	}

	//if the slowest lap is the first lap it does not update, because the fastest lap over rides it
	const findFastestAndSlowestLap = (lapTime, lapNumber) => {
		let fastOrSlow = null
		if (lapTime > fastestAndSlowestLapTime.slowestTime || fastestAndSlowestLapTime.slowestTime == null) {
			setLapItems((prevState) => {
				prevState && [
					...prevState.map((lap, index) => {
						if (lap.fastOrSlow === 'slow') {
							lap.fastOrSlow = null
						}
					}),
				]
			})
			setFastestAndSlowestLapTime((prevState) => ({ ...prevState, slowestLapNumber: lapNumber, slowestTime: lapTime }))
			fastOrSlow = 'slow'
		}
		if (lapTime < fastestAndSlowestLapTime.fastestTime || fastestAndSlowestLapTime.fastestTime == null) {
			setLapItems((prevState) => {
				prevState && [
					...prevState.map((lap, index) => {
						if (lap.fastOrSlow === 'fast') {
							lap.fastOrSlow = null
						}
					}),
				]
			})
			setFastestAndSlowestLapTime((prevState) => ({ ...prevState, fastestLapNumber: lapNumber, fastestTime: lapTime }))
			fastOrSlow = 'fast'
		}
		return fastOrSlow
	}

	return (
		<main className='stopwatchBody'>
			<Timer stopWatchTime={stopWatchTime} />
			<Buttons onLapButtonClick={onLapButtonClick} onStartButtonClick={onStartButtonClick} isTimerRunning={isTimerRunning} />
			<Laps stopWatchTime={stopWatchTime} lapItems={lapItems} calculateCurrentLapTime={calculateCurrentLapTime} />
		</main>
	)
}

export default App
