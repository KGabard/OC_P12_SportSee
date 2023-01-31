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

export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function translateKinds(string: string): string {
  switch (string) {
    case 'cardio':
      return 'Cardio'
    case 'energy':
      return 'Energie'
    case 'endurance':
      return 'Endurance'
    case 'strength':
      return 'Force'
    case 'speed':
      return 'Vitesse'
    case 'intensity':
      return 'Intensité'

    default:
      return ''
  }
}

function addLeadingZero(num: string): string {
  const parsedNum = parseInt(num, 10)
  return parsedNum < 10 ? `0${parsedNum}` : `${parsedNum}`
}

export function convertDate(date: string): string {
  const [year, month, day] = date.split('-').map((num) => addLeadingZero(num))
  return `${day}/${month}`
}
