import {
  AverageSessionsType,
  ConvertedSessionLengthType,
  SessionLengthType,
} from '../types/Types'

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
