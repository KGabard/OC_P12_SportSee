import {
  ConvertedPerformanceDataType,
  KindType,
  PerformanceDataType,
  PerformanceType,
} from '../types/Types'
import { translateKinds } from '../utils/Utils'

/**
 * Converts a performance kind id to its string representation.
 *
 * @param {string} kindId The id of the performance kind.
 * @param {KindType} kind The kind data.
 *
 * @returns {string} The string representation of the performance kind.
 */
const convertKind = (kindId: string, kind: KindType): string => {
  switch (kindId) {
    case '1':
      return translateKinds(kind[1])
    case '2':
      return translateKinds(kind[2])
    case '3':
      return translateKinds(kind[3])
    case '4':
      return translateKinds(kind[4])
    case '5':
      return translateKinds(kind[5])
    case '6':
      return translateKinds(kind[6])

    default:
      return ''
  }
}

/**
 * Converts the performance data with its kind from number to string representation.
 *
 * @param {KindType} kind The kind of performance data.
 * @param {PerformanceDataType[]} perfomanceData The performance data of the user.
 *
 * @returns {ConvertedPerformanceDataType[]} The converted performance data.
 */
const convertPerformances = (
  kind: KindType,
  perfomanceData: PerformanceDataType[]
): ConvertedPerformanceDataType[] => {
  const performanceDataArray: ConvertedPerformanceDataType[] = []
  perfomanceData.forEach((perfomance) => {
    const kindId = perfomance.kind.toString()
    performanceDataArray.push({
      ...perfomance,
      kind: convertKind(kindId, kind),
    })
  })

  return performanceDataArray
}

/**
 * Class Performance represents a performance data with its own userId and converted performance data.
 *
 * @class Performance
 *
 * @param {PerformanceType} _performance The original performance data.
 *
 * @property {string} userId The id of the user.
 * @property {ConvertedPerformanceDataType[]} performances The performance data of the user converted with its kind.
 */
export class Performance {
  _performance: PerformanceType

  constructor(performance: PerformanceType) {
    this._performance = performance
  }

  get userId() {
    return this._performance.userId
  }

  get performances() {
    return convertPerformances(this._performance.kind, this._performance.data)
  }
}
