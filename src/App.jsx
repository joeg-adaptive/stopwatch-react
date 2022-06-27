import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Timer from './timer/timer.jsx'
import Buttons from './buttons/buttons'

function App() {
	const [startStop, setStartStop] = useState(false)
	const [resetLap, setResetLap] = useState(false)
	return (
		<div>
			<div>
				<main className='stopwatchBody'>
					<div className='stopwatchTime'>
						<span id='stopWatchClock' data-id='stopWatchClock'>
							<Timer startStop={startStop} />
						</span>
					</div>
					<Buttons
						startStop={startStop}
						setStartStop={setStartStop}
						resetLap={resetLap}
						setResetLap={setResetLap}
					/>
					<div className='stopWatchLaps' data-id='stopWatchLaps'></div>
				</main>
			</div>
		</div>
	)
}

export default App
