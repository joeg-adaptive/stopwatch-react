import Timer from './components/Timer/Timer.jsx'
import Buttons from './components/Buttons/Buttons.jsx'
import { StopWatchProvider } from './StopWatchContext'

function App() {
	return (
		<StopWatchProvider>
			<div>
				<div>
					<main className='stopwatchBody'>
						<div className='stopwatchTime'>
							<span id='stopWatchClock' data-id='stopWatchClock'>
								<Timer />
							</span>
						</div>
						<Buttons />
						<div className='stopWatchLaps' data-id='stopWatchLaps'></div>
					</main>
				</div>
			</div>
		</StopWatchProvider>
	)
}

export default App
