export const initialState = {
	isTimerRunning: false,
	stopWatchTime: 0,
	lapItems: [],
	fastestLap: { time: Number.POSITIVE_INFINITY },
	slowestLap: { time: null },
}

export const Action = {
	TOGGLE_TIMER: 'TOGGLE_TIMER',
	RESET_TIMER: 'RESET_TIMER',
	STOP_WATCH_TIME: 'STOP_WATCH_TIME',
	ADD_LAP: 'ADD_LAP',
}

export default function stopwatchReducer(currentState, action) {
	switch (action.type) {
		case Action.TOGGLE_TIMER:
			return { ...currentState, isTimerRunning: !currentState.isTimerRunning }
		case Action.STOP_WATCH_TIME:
			return { ...currentState, stopWatchTime: action.stopWatchTime }
		case Action.ADD_LAP:
			let newLap = {
				lapNumber: currentState.lapItems.length + 1,
				time: currentState.stopWatchTime - currentState.lapItems.reduce((accumulater, lap) => accumulater + lap.time, 0),
			}
			return {
				...currentState,
				lapItems: [newLap, ...currentState.lapItems],
				fastestLap: newLap.time < currentState.fastestLap?.time ? newLap : currentState.fastestLap,
				slowestLap: newLap.time > currentState.slowestLap.time ? newLap : currentState.slowestLap,
			}
		case Action.RESET_TIMER:
			return initialState
		default:
			return 'Error I did not recieve a proper case'
	}
}
