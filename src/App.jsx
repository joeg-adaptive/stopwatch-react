import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Timer from './timer/timer.jsx'

function App() {
	//const [timer, setTimer] = useState(0)

	return (
		<html>
			<head>
				<title>Stopwatch</title>
				<link rel='stylesheet' href='stopwatch.css' />
			</head>
			<body>
				<main class='stopwatchBody'>
					<div class='stopwatchTime'>
						<span id='stopWatchClock' data-id='stopWatchClock'>
							<Timer />
						</span>
					</div>
					<div class='stopwatchButtons'>
						<button class='reset' data-id='resetLap'>
							Reset
						</button>
						<button class='start' data-id='startStop'>
							Start
						</button>
					</div>
					<div class='stopWatchLaps' data-id='stopWatchLaps'></div>
				</main>
			</body>
		</html>
	)
}

export default App
