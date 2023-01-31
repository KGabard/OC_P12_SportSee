import {
  ConvertedPerformanceDataType,
  KindType,
  PerformanceDataType,
  PerformanceType,
} from '../types/Types'
import { capitalizeFirstLetter, translateKinds } from '../utils/Utils'

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
