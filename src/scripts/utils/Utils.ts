export function numberToString(number: number): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export function convertDuration(duration: number): string {
  let hours = Math.floor(duration / 60)
  let minutes = duration % 60
  
  if (hours > 0) {
    return `${hours} h ${minutes} min`
  } else {
    return `${minutes} min`
  }
}
