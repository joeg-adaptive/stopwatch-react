import { useState, useEffect } from 'react'
import Timer from './components/Timer/Timer.jsx'
import Buttons from './components/Buttons/Buttons.jsx'
import Laps from './components/Laps/Laps.jsx'

function App() {
	const [isTimerRunning, setIsTimerRunning] = useState(false)
	const [stopWatchTime, setStopWatchTime] = useState(0)
	const [lapItems, setLapItems] = useState([])
	const [fastestAndSlowestLapTime, setFastestAndSlowestLapTime] = useState([])

	useEffect(() => {
		if (isTimerRunning) {
			const startTime = Date.now() - stopWatchTime
			const intervalId = setInterval(() => {
				setStopWatchTime(Date.now() - startTime)
			}, 1000 / 16)
			return () => clearInterval(intervalId)
		}
	}, [isTimerRunning])

	const onStartButtonClick = () => {
		setIsTimerRunning(!isTimerRunning)
	}

	const onLapButtonClick = () => {
		if (isTimerRunning) {
			incrementLaps()
		} else {
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
		let fast = findFastestLap(lapTime, lapNumber)
		let slow = findSlowestLap(lapTime, lapNumber)
		setLapItems([{ lap: lapNumber, time: lapTime, fast: fast, slow: slow }, ...lapItems])
	}

	const findFastestLap = (lapTime, lapNumber) => {
		if (lapTime < fastestAndSlowestLapTime.fastestTime || fastestAndSlowestLapTime.fastestTime == null) {
			setLapItems((prevState) => {
				prevState && [
					...prevState.map((lap) => {
						if (lap.fast === true) {
							lap.fast = false
						}
					}),
				]
			})
			setFastestAndSlowestLapTime((prevState) => ({ ...prevState, fastestLapNumber: lapNumber, fastestTime: lapTime }))
			return true
		}
		return false
	}
	const findSlowestLap = (lapTime, lapNumber) => {
		if (lapTime > fastestAndSlowestLapTime.slowestTime || fastestAndSlowestLapTime.slowestTime == null) {
			setLapItems((prevState) => {
				prevState && [
					...prevState.map((lap) => {
						if (lap.slow === true) {
							lap.slow = false
						}
					}),
				]
			})
			setFastestAndSlowestLapTime((prevState) => ({ ...prevState, slowestLapNumber: lapNumber, slowestTime: lapTime }))
			return true
		}
		return false
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
