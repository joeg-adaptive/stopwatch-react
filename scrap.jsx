// const incrementLaps = () => {

//     let lapNumber = lapItems.length + 1
//     let lapTime = calculateCurrentLapTime()
//     let fast = findFastestLap(lapTime, lapNumber)
//     let slow = findSlowestLap(lapTime, lapNumber)
//     setLapItems([{ lap: lapNumber, time: lapTime, fast: fast, slow: slow }, ...lapItems])
// }

// const onLapButtonClick = () => {
//     if (isTimerRunning) {
//         incrementLaps()
//     } else {
//         // setStopWatchTime(0)
//         // setLapItems([])
//         // setFastestAndSlowestLapTime([])
//     }
// }
//	<button onClick={() => dispatch({ type: 'helloWorld' })} />
//
// const findFastestLap = (lapTime, lapNumber) => {
// 	if (lapTime < fastestAndSlowestLapTime.fastestTime || fastestAndSlowestLapTime.fastestTime == null) {
// 		setLapItems((prevState) => {
// 			prevState && [
// 				...prevState.map((lap) => {
// 					if (lap.fast === true) {
// 						lap.fast = false
// 					}
// 				}),
// 			]
// 		})
// 		setFastestAndSlowestLapTime((prevState) => ({ ...prevState, fastestLapNumber: lapNumber, fastestTime: lapTime }))
// 		return true
// 	}
// 	return false
// }
// const findSlowestLap = (lapTime, lapNumber) => {
// 	if (lapTime > fastestAndSlowestLapTime.slowestTime || fastestAndSlowestLapTime.slowestTime == null) {
// 		setLapItems((prevState) => {
// 			prevState && [
// 				...prevState.map((lap) => {
// 					if (lap.slow === true) {
// 						lap.slow = false
// 					}
// 				}),
// 			]
// 		})
// 		setFastestAndSlowestLapTime((prevState) => ({ ...prevState, slowestLapNumber: lapNumber, slowestTime: lapTime }))
// 		return true
// 	}
// 	return false
// }
