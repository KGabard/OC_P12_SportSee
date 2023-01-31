import { UserDataType } from '../types/Types'

export class User {
  _userData: UserDataType

  constructor(userData: UserDataType) {
    this._userData = userData
  }

  get id() {
    return this._userData.id
  }

  get firstName() {
    return this._userData.userInfos.firstName
  }

  get lastName() {
    return this._userData.userInfos.lastName
  }

  get age() {
    return this._userData.userInfos.age
  }

  get todayScore() {
    return this._userData.todayScore * 100
  }

  get calorieCount() {
    return this._userData.keyData.calorieCount
  }

  get proteinCount() {
    return this._userData.keyData.proteinCount
  }

  get carbsCount() {
    return this._userData.keyData.carbohydrateCount
  }

  get lipidCount() {
    return this._userData.keyData.lipidCount
  }
}
