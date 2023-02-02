import { ActivityType, SessionActivityType } from '../types/Types'
import { convertDate } from '../utils/Utils'

/**
 * Convert the session's date to a string format
 * @param sessions Array of session activities
 * @returns Array of session activities with converted date format
 */
const convertDays = (
  sessions: SessionActivityType[]
): SessionActivityType[] => {
  return sessions.map((session) => {
    return { ...session, day: convertDate(session.day) }
  })
}

/**
 * Class representing the activity data.
 *
 * @class Activity
 *
 * @param {ActivityType} _activity The original activity data.
 * 
 * @property {string} userId The id of the user.
 * @property {SessionActivityType[]} sessions An array of session activities with converted date format.
 */
export class Activity {
  _activity: ActivityType

  constructor(activity: ActivityType) {
    this._activity = activity
  }

  get userId() {
    return this._activity.userId
  }

  get sessions() {
    return convertDays(this._activity.sessions)
  }
}
