import { UserDataType } from '../types/Types'

export class SportSeeApi {
  _url: string

  constructor() {
    this._url = 'http://localhost:5000/user/'
  }

  async getAllUsersData(): Promise<UserDataType[] | undefined> {
    try {
      const res = await fetch(this._url + 'all', {
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
      
      return data.data
    } catch (error: unknown) {
      console.log(error)
    }
  }

  async getUserData(id: number): Promise<UserDataType | undefined> {
    try {
      const res = await fetch(this._url + id.toString(), {
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

      return data.data
    } catch (error: unknown) {
      console.log(error)
    }
  }
}
