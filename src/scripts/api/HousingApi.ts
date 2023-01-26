import { HousingDataType } from '../types/Types'

export class HousingApi {
  _url: string

  constructor(url: string) {
    this._url = url
  }

  async getHousings(): Promise<HousingDataType[] | undefined> {
    try {
      const res = await fetch(this._url, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      const data = await res.json()

      if (!res.ok) {
        Promise.reject(new Error('Error in 4xx or 5xx range'))
        return
      }

      return data
    } catch (error: unknown) {
      console.log(error)
    }
  }

  async getCurrentHousing(
    currentId: string | undefined
  ): Promise<HousingDataType | undefined> {
    const housingArray = await this.getHousings()
    return housingArray?.find((housing) => housing.id === currentId)
  }
}
