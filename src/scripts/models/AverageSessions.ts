import {
  AverageSessionsType,
  ConvertedSessionLengthType,
  SessionLengthType,
} from '../types/Types'

/**
 * Converts the number representation of the day of the week to its string representation.
 * @param {SessionLengthType[]} sessions An array of objects representing the session length data.
 * @returns {ConvertedSessionLengthType[]} An array of objects with the `day` property converted to its string representation.
 */
const convertDays = (
  sessions: SessionLengthType[]
): ConvertedSessionLengthType[] => {
  return sessions.map((session) => {
    let currentDay: string
    switch (session.day) {
      case 1:
        currentDay = 'L'
        break
      case 2:
        currentDay = 'M'
        break
      case 3:
        currentDay = 'M'
        break
      case 4:
        currentDay = 'J'
        break
      case 5:
        currentDay = 'V'
        break
      case 6:
        currentDay = 'S'
        break
      case 7:
        currentDay = 'D'
        break

      default:
        currentDay = 'Err.'
        break
    }
    return { ...session, day: currentDay }
  })
}

/**
 * Class representing the average sessions data.
 *
 * @class AverageSessions
 *
 * @param {AverageSessionsType} _averageSession The original average session data.
 *
 * @property {string} userId The id of the user.
 * @property {ConvertedSessionLengthType[]} sessions An array of average session data with the `day` property converted to its string representation.
 */
export class AverageSessions {
  _averageSession: AverageSessionsType

  constructor(averageSession: AverageSessionsType) {
    this._averageSession = averageSession
  }

  get userId() {
    return this._averageSession.userId
  }

  get sessions() {
    return convertDays(this._averageSession.sessions)
  }
}
