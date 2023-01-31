import { ActivityType, SessionActivityType } from '../types/Types'
import { convertDate } from '../utils/Utils'

const convertDays = (
  sessions: SessionActivityType[]
): SessionActivityType[] => {
  return sessions.map((session) => {
    return { ...session, day: convertDate(session.day) }
  })
}

export class Activity {
  _activity: ActivityType

  constructor(activity: ActivityType) {
    this._activity = activity
  }

  get userId() {
    return this._activity.userId
  }

  get activities() {
    return convertDays(this._activity.sessions)
  }
}
