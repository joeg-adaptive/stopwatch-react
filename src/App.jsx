import { useState, useEffect } from 'react'
import Timer from './components/Timer/Timer.jsx'
import Buttons from './components/Buttons/Buttons.jsx'
import Laps from './components/Laps/Laps.jsx'

//invisible laps on initilization
//replace previousTime

function App() {
	{
		/*1*/
	}
	const [isTimerRunning, setIsTimerRunning] = useState(false)
	{
		/*2*/
	}
	const [stopWatchTime, setStopWatchTime] = useState(0)
	{
		/*3*/
	}
	const [previousTime, setPreviousTime] = useState(0)
	{
		/*4*/
	}
	const [lapItems, setLapItems] = useState([])
	{
		/*5*/
	}
	const [fastestAndSlowestLapTime, setFastestAndSlowestLapTime] = useState([])

	let startTime = Date.now()
	useEffect(() => {
		if (isTimerRunning) {
			const intervalId = setInterval(() => {
				setStopWatchTime(Date.now() - (startTime - previousTime))
			}, 1000 / 16)
			return () => clearInterval(intervalId)
		} else if (!isTimerRunning) {
			setPreviousTime(stopWatchTime)
		}
	}, [isTimerRunning])

	//onStart
	const onStartButtonClick = () => {
		setIsTimerRunning(!isTimerRunning)
	}
	//onLap
	const onLapButtonClick = () => {
		if (isTimerRunning) {
			console.log('lap')
			incrementLaps()
			if (lapItems.length > 3) {
			}
		} else {
			console.log('reset')
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
		//console.log(lapItems)
	}

	const findFastestAndSlowestLap = (lapTime, lapNumber) => {
		let fastOrSlow = null
		let previousFastOrSlow = null

		if (lapTime > fastestAndSlowestLapTime.slowestTime || fastestAndSlowestLapTime.slowestTime == null) {
			//Search for previous to remove attribute
			previousFastOrSlow = lapItems.find((lap) => lap.fastOrSlow === 'slow')
			previousFastOrSlow ? (previousFastOrSlow['fastOrSlow'] = null) : null
			//Assign New fastest Lap
			setFastestAndSlowestLapTime({ ...fastestAndSlowestLapTime, slowestLapNumber: lapNumber, slowestTime: lapTime })
			fastOrSlow = 'slow'
		}
		if (lapTime < fastestAndSlowestLapTime.fastestTime || fastestAndSlowestLapTime.fastestTime == null) {
			//Search for previous to remove attribute
			previousFastOrSlow = lapItems.find((lap) => lap.fastOrSlow === 'fast')
			previousFastOrSlow ? (previousFastOrSlow['fastOrSlow'] = null) : null
			//Assign New fastest Lap
			setFastestAndSlowestLapTime({ ...fastestAndSlowestLapTime, fastestLapNumber: lapNumber, fastestTime: lapTime })
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
