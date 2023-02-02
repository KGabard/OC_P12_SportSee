import {
  ActivityType,
  AverageSessionsType,
  PerformanceType,
  UserDataType,
} from '../types/Types'

async function fetchFrom(url: string) {
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

/**
 * A class for making API calls to retrieve user data.
 *
 * @class SportSeeApi
 * @param {string} _url Base URL of the API.
 * @param {string} _sufix The suffix to append to the URL (either '.json' or '').
 */
export class SportSeeApi {
  _url: string
  _sufix: '.json' | ''

  constructor() {
    if (process.env.NODE_ENV === 'development') {
      this._url = 'mockData/user/'
      this._sufix = '.json'
    } else {
      this._url = 'https://oc-p12-sportsee-backend.onrender.com/user/'
      this._sufix = ''
    }
  }

  /**
   * Makes an API call to retrieve data for all users.
   *
   * @method
   * @returns {Promise<UserDataType[] | undefined>} Promise resolving to an array of user data objects, or undefined if an error occurs.
   */
  async getAllUsersData(): Promise<UserDataType[] | undefined> {
    const allUsersDataUrl = this._url + 'all' + this._sufix
    return fetchFrom(allUsersDataUrl)
  }

  /**
   * Makes an API call to retrieve data for a single user.
   *
   * @method
   * @param {number} id ID of the user to retrieve data for.
   * @returns {Promise<UserDataType | undefined>} Promise resolving to a user data object, or undefined if an error occurs.
   */
  async getUserData(id: number): Promise<UserDataType | undefined> {
    const userDataUrl = this._url + id.toString() + this._sufix
    return fetchFrom(userDataUrl)
  }

  /**
   * Makes an API call to retrieve activity data for a single user.
   *
   * @method
   * @param {number} id ID of the user to retrieve activity data for.
   * @returns {Promise<ActivityType | undefined>} Promise resolving to an activity data object, or undefined if an error occurs.
   */
  async getUserActivity(id: number): Promise<ActivityType | undefined> {
    const userActivityUrl =
      this._url + id.toString() + '/activity' + this._sufix
    return fetchFrom(userActivityUrl)
  }

  /**
   * Makes an API call to retrieve average sessions data for a single user.
   *
   * @method
   * @param {number} id ID of the user to retrieve average sessions data for.
   * @returns {Promise<AverageSessionsType | undefined>} Promise resolving to an average sessions data object, or undefined if an error occurs.
   */
  async getUserAverageSessions(
    id: number
  ): Promise<AverageSessionsType | undefined> {
    const userAverageSessionsUrl =
      this._url + id.toString() + '/average-sessions' + this._sufix
    return fetchFrom(userAverageSessionsUrl)
  }

  /**
   * Makes an API call to retrieve performance data for a single user.
   *
   * @method
   * @param {number} id ID of the user to retrieve performance data for.
   * @returns {Promise<PerformanceType | undefined>} Promise resolving to a performance data object, or undefined if an error occurs.
   */
  async getUserPerformance(id: number): Promise<PerformanceType | undefined> {
    const userPerformanceUrl =
      this._url + id.toString() + '/performance' + this._sufix
    return fetchFrom(userPerformanceUrl)
  }
}
