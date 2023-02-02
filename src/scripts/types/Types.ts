/**
 * User information type containing first name, last name, and age.
 * 
 * @interface UserInfosType
 * 
 * @property {string} firstName First name of the user.
 * @property {string} lastName Last name of the user.
 * @property {number} age Age of the user.
 */
export interface UserInfosType {
  firstName: string
  lastName: string
  age: number
}

/**
 * Key data type containing calorie count, protein count, carbohydrate count, and lipid count.
 * 
 * @interface KeyDataType
 * 
 * @property {number} calorieCount Calorie count of the user.
 * @property {number} proteinCount Protein count of the user.
 * @property {number} carbohydrateCount Carbohydrate count of the user.
 * @property {number} lipidCount Lipid count of the user.
 */
export interface KeyDataType {
  calorieCount: number
  proteinCount: number
  carbohydrateCount: number
  lipidCount: number
}

/**
 * User data type containing user information and key data.
 * 
 * @interface UserDataType
 * 
 * @property {number} id The id of the user.
 * @property {UserInfosType} userInfos The information of the user.
 * @property {number} todayScore Today score of the user.
 * @property {KeyDataType} keyData Key data of the user.
 */
export interface UserDataType {
  id: number
  userInfos: UserInfosType
  todayScore: number
  keyData: KeyDataType
}

/**
 * Session activity type containing a day and the related kilogram and calories.
 * 
 * @interface SessionActivityType
 * 
 * @property {string} day The day of the session activity.
 * @property {number} kilogram The kilogram of the session activity.
 * @property {number} calories The calories of the session activity.
 */
export interface SessionActivityType {
  day: string
  kilogram: number
  calories: number
}

/**
 * Activity type containing user id and its session activities.
 * 
 * @interface ActivityType
 * 
 * @property {number} userId The id of the user.
 * @property {SessionActivityType[]} sessions The session activities of the user.
 */
export interface ActivityType {
  userId: number
  sessions: SessionActivityType[]
}

/**
 * Kind type containing string representation of the kind.
 * 
 * @interface KindType
 * 
 * @property {string} 1 - Kind representation of 1.
 * @property {string} 2 - Kind representation of 2.
 * @property {string} 3 - Kind representation of 3.
 * @property {string} 4 - Kind representation of 4.
 * @property {string} 5 - Kind representation of 5.
 * @property {string} 6 - Kind representation of 6.
 */
export interface KindType {
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
}

/**
 * Represents the performance data with its value and kind.
 * 
 * @interface PerformanceDataType
 * 
 * @property {number} value The performance value.
 * @property {number} kind The kind of the performance.
 */
export interface PerformanceDataType {
  value: number
  kind: number
}

/**
 * Represents the converted performance data with its kind and value.
 * 
 * @interface ConvertedPerformanceDataType
 * 
 * @property {string} kind The kind of the performance.
 * @property {number} value The converted performance value.
 */
export interface ConvertedPerformanceDataType {
  kind: string
  value: number
}

/**
 * Represents the performance of the user with its user id, kind, and data.
 * 
 * @interface PerformanceType
 * 
 * @property {number} userId The id of the user.
 * @property {KindType} kind The kind of the performance.
 * @property {PerformanceDataType[]} data The performance data of the user.
 */
export interface PerformanceType {
  userId: number
  kind: KindType
  data: PerformanceDataType[]
}

/**
 * Represents the session length with its day and session length.
 * 
 * @interface SessionLengthType
 * 
 * @property {number} day The day of the session.
 * @property {number} sessionLength The length of the session.
 */
export interface SessionLengthType {
  day: number
  sessionLength: number
}

/**
 * Represents the converted session length with its day and session length.
 * 
 * @interface ConvertedSessionLengthType
 * 
 * @property {string} day The converted day of the session.
 * @property {number} sessionLength The length of the session.
 */
export interface ConvertedSessionLengthType {
  day: string
  sessionLength: number
}

/**
 * Represents the average sessions of the user with its user id and sessions.
 * 
 * @interface AverageSessionsType
 * 
 * @property {number} userId The id of the user.
 * @property {SessionLengthType[]} sessions The session lenghts of the user.
 */
export interface AverageSessionsType {
  userId: number
  sessions: SessionLengthType[]
}
