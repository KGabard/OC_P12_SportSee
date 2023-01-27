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
