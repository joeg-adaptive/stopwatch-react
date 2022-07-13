import { useEffect, useReducer } from 'react'
import stopwatchReducer from './reducer/reducer.jsx'
import { initialState } from './reducer/reducer.jsx'
import { Action } from './reducer/reducer.jsx'
import Timer from './components/Timer/Timer.jsx'
import Buttons from './components/Buttons/Buttons.jsx'
import Laps from './components/Laps/Laps.jsx'

function App() {
	const [state, dispatch] = useReducer(stopwatchReducer, initialState)

	useEffect(() => {
		if (state.isTimerRunning) {
			const startTime = Date.now() - state.stopWatchTime
			const intervalId = setInterval(() => {
				dispatch({ type: Action.STOP_WATCH_TIME, stopWatchTime: Date.now() - startTime })
			}, 1000 / 16)
			return () => clearInterval(intervalId)
		}
	}, [state.isTimerRunning])

	const onStartButtonClick = () => {
		dispatch({ type: Action.TOGGLE_TIMER })
	}

	const onLapButtonClick = () => {
		if (state.isTimerRunning) {
			dispatch({ type: Action.ADD_LAP })
		} else {
			dispatch({ type: Action.RESET_TIMER })
		}
	}

	return (
		<main className='stopwatchBody'>
			<Timer stopWatchTime={state.stopWatchTime} />
			<Buttons onLapButtonClick={onLapButtonClick} onStartButtonClick={onStartButtonClick} isTimerRunning={state.isTimerRunning} />
			<Laps
				stopWatchTime={state.stopWatchTime}
				lapItems={state.lapItems}
				fastestLap={state.fastestLap}
				slowestLap={state.slowestLap}
			/>
		</main>
	)
}

export default App
