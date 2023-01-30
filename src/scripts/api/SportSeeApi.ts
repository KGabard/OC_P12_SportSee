import { UserDataType } from '../types/Types'

async function fetchFrom(url: string) {
  console.log(process.env.NODE_ENV)

  try {
    const res = await fetch(url, {
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

export class SportSeeApi {
  _url: string
  _sufix: '.json' | ''

  constructor() {
    if (process.env.NODE_ENV === 'development') {
      this._url = 'mockData/user/'
      this._sufix = '.json'
    } else {
      this._url = 'http://localhost:5000/user/'
      this._sufix = ''
    }
  }

  async getAllUsersData(): Promise<UserDataType[] | undefined> {
    const allUsersDataUrl = this._url + 'all' + this._sufix
    return fetchFrom(allUsersDataUrl)
  }

  async getUserData(id: number): Promise<UserDataType | undefined> {
    const userDataUrl = this._url + id.toString() + this._sufix
    return fetchFrom(userDataUrl)
  }

  async getUserActivity(id: number): Promise<UserDataType | undefined> {
    const userActivityUrl =
      this._url + id.toString() + '/activity' + this._sufix
    return fetchFrom(userActivityUrl)
  }

  async getUserAverageSessions(id: number): Promise<UserDataType | undefined> {
    const userAverageSessionsUrl =
      this._url + id.toString() + '/average-sessions' + this._sufix
    return fetchFrom(userAverageSessionsUrl)
  }

  async getUserPerformance(id: number): Promise<UserDataType | undefined> {
    const userPerformanceUrl =
      this._url + id.toString() + '/performance' + this._sufix
    return fetchFrom(userPerformanceUrl)
  }
}
