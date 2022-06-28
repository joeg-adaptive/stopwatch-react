import React from 'react'
import StopWatchContext from '../../StopWatchContext'
import { useContext } from 'react'

export default function Timer() {
	const { stopwatchTime } = useContext(StopWatchContext)

	return <div>{stopwatchTime ? stopwatchTime : '00:00.00'}</div>
}
