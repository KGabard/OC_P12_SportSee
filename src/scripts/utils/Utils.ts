export function numberToString(number: number): string {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
