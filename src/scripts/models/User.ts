import { UserDataType } from '../types/Types'

/**
 * Class User represents a user with its own id, first name, last name, age, and various sport-related data.
 *
 * @class User
 *
 * @param {UserDataType} _userData The original user data.
 *
 * @property {string} id The id of the user.
 * @property {string} firstName The first name of the user.
 * @property {string} lastName The last name of the user.
 * @property {number} age The age of the user.
 * @property {number} todayScore The score of the user in percent.
 * @property {number} calorieCount The calorie count of the user.
 * @property {number} proteinCount The protein count of the user.
 * @property {number} carbsCount The carbohydrate count of the user.
 * @property {number} lipidCount The lipid count of the user.
 */
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
