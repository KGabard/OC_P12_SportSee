/**
 * Converts a number to string with commas added every three digits.
 * 
 * @param {number} number The number to be converted.
 * @returns {string} The string representation of the number with commas.
 */
export function numberToString(number: number): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

/**
 * Converts a duration in minutes to a string representation with hours and minutes.
 * 
 * @param {number} duration The duration in minutes to be converted.
 * @returns {string} The string representation of the duration in hours and minutes.
 */
export function convertDuration(duration: number): string {
  let hours = Math.floor(duration / 60)
  let minutes = duration % 60

  if (hours > 0) {
    return `${hours} h ${minutes} min`
  } else {
    return `${minutes} min`
  }
}

/**
 * Capitalizes the first letter of a string.
 * 
 * @param {string} string The string to be capitalized.
 * @returns {string} The capitalized string.
 */
export function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

/**
 * Translates a string to its equivalent from English to French.
 * 
 * @param {string} string The string to be translated.
 * @returns {string} The translated string.
 */
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

/**
 * Adds a leading zero to a single-digit number string representation.
 * 
 * @param {string} num The string representation of the number to be padded with a leading zero.
 * @returns {string} The string representation of the number with a leading zero.
 */
function addLeadingZero(num: string): string {
  const parsedNum = parseInt(num, 10)
  return parsedNum < 10 ? `0${parsedNum}` : `${parsedNum}`
}

/**
 * Converts a date string to a different string representation from "YYYY-MM-DD" to "DD/MM".
 * 
 * @param {string} date The date string to be converted.
 * @returns {string} The string representation of the date in the desired format.
 */
export function convertDate(date: string): string {
  const [year, month, day] = date.split('-').map((num) => addLeadingZero(num))
  return `${day}/${month}`
}
