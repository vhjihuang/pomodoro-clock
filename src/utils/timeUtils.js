export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds/60)
  const remainingSeconds = seconds % 60

  const formatMinutes = String(minutes).padStart(2, '0')
  const formatSeconds = String(remainingSeconds).padStart(2, '0')

  return `${formatMinutes}: ${formatSeconds}`
}