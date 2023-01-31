export interface UserInfosType {
  firstName: string
  lastName: string
  age: number
}

export interface KeyDataType {
  calorieCount: number
  proteinCount: number
  carbohydrateCount: number
  lipidCount: number
}

export interface UserDataType {
  id: number
  userInfos: UserInfosType
  todayScore: number
  keyData: KeyDataType
}

export interface SessionActivityType {
  day: string
  kilogram: number
  calories: number
}

export interface ActivityType {
  userId: number
  sessions: SessionActivityType[]
}

export interface KindType {
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
}

export interface PerformanceDataType {
  value: number
  kind: number
}

export interface ConvertedPerformanceDataType {
  kind: string
  value: number
  max: number
}

export interface PerformanceType {
  userId: number
  kind: KindType
  data: PerformanceDataType[]
}

export interface SessionLengthType {
  day: number
  sessionLength: number
}

export interface ConvertedSessionLengthType {
  day: string
  sessionLength: number
}

export interface AverageSessionsType {
  userId: number
  sessions: SessionLengthType[]
}
