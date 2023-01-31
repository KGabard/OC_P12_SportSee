import {
  ConvertedPerformanceDataType,
  KindType,
  PerformanceDataType,
  PerformanceType,
} from '../types/Types'
import { capitalizeFirstLetter } from '../utils/Utils'

const convertKind = (kindId: string, kind: KindType): string => {
  switch (kindId) {
    case '1':
      return capitalizeFirstLetter(kind[1])
    case '2':
      return capitalizeFirstLetter(kind[2])
    case '3':
      return capitalizeFirstLetter(kind[3])
    case '4':
      return capitalizeFirstLetter(kind[4])
    case '5':
      return capitalizeFirstLetter(kind[5])
    case '6':
      return capitalizeFirstLetter(kind[6])

    default:
      return ''
  }
}

const convertPerformances = (
  kind: KindType,
  perfomanceData: PerformanceDataType[],
  maxPerformance: number
): ConvertedPerformanceDataType[] => {
  const performanceDataArray: ConvertedPerformanceDataType[] = []
  perfomanceData.forEach((perfomance) => {
    const kindId = perfomance.kind.toString()
    performanceDataArray.push({
      ...perfomance,
      kind: convertKind(kindId, kind),
      max: maxPerformance,
    })
  })

  return performanceDataArray
}

export class Performance {
  _performance: PerformanceType
  _maxPerformance: number

  constructor(performance: PerformanceType) {
    this._performance = performance
    this._maxPerformance = 300
  }

  get userId() {
    return this._performance.userId
  }

  get performances() {
    return convertPerformances(
      this._performance.kind,
      this._performance.data,
      this._maxPerformance
    )
  }
}
