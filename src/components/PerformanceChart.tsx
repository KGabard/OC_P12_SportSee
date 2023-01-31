import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from 'recharts'
import { ConvertedPerformanceDataType } from '../scripts/types/Types'

type Props = {
  performances: ConvertedPerformanceDataType[]
}

const PerformanceChart = ({ performances }: Props) => {
  return (
    <div className="performance-chart">
      <ResponsiveContainer >
        <RadarChart
          className="performance-chart__chart"
          margin={{
            top: 16,
            right: 16,
            left: 16,
            bottom: 16,
          }}
          data={performances}
          startAngle={-150}
          endAngle={210}
        >
          <PolarGrid radialLines={false} polarRadius={[10, 25, 50, 70]} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="#fff"
            tickLine={false}
            tick={{
              fill: '#fff',
              fontFamily: 'Roboto',
              fontWeight: '500',
              fontSize: '12px',
            }}
          />
          <PolarRadiusAxis domain={[0, 250]} axisLine={false} tick={false} />
          <Radar
            dataKey="value"
            stroke="var(--highlight-primary)"
            fill="var(--highlight-primary)"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default PerformanceChart
