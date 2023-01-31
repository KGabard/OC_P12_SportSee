import {
  LineChart,
  Line,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts'
import { NameType } from 'recharts/types/component/DefaultTooltipContent'
import { ConvertedSessionLengthType } from '../scripts/types/Types'
import { convertDuration } from '../scripts/utils/Utils'

const CustomTooltip = ({ active, payload }: TooltipProps<number, NameType>) => {
  if (!active || !payload) {
    return null
  }

  return (
    <div className="average-sessions-chart__tooltip">
      <p className="average-sessions-chart__tooltip__label">
        {payload[0].value !== undefined && convertDuration(payload[0].value)}
      </p>
    </div>
  )
}

type Props = {
  sessions: ConvertedSessionLengthType[]
}

const AverageSessionsChart = ({ sessions }: Props) => {
  return (
    <div className="average-sessions-chart">
      <h2 className="average-sessions-chart__title">
        Durée moyenne des sessions
      </h2>
      <ResponsiveContainer >
        <LineChart
          className="average-sessions-chart__chart"
          data={sessions}
          margin={{
            top: 32,
            right: 16,
            left: 16,
            bottom: 8,
          }}
        >
          <XAxis
            className="average-sessions-chart__x-axis"
            dataKey="day"
            tick={{
              fill: '#fff',
              opacity: 0.7,
              fontFamily: 'Roboto',
              fontWeight: '500',
              fontSize: '12px',
            }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            content={<CustomTooltip />}
            // contentStyle={{ backgroundColor: '#8884d8', color: '#fff' }}
            // itemStyle={{ color: '#fff' }}
            // labelStyle={{ backgroundColor: '#8884d8', color: '#fff' }}
            // cursor={false}
          />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke={'#fff'}
            strokeWidth={3}
            dot={{ fill: 'transparent', stroke: 'transparent', r: 4 }}
            activeDot={{
              fill: '#fff',
              stroke: 'rgba(255,255,255,0.4)',
              strokeWidth: 10,
              r: 6,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default AverageSessionsChart
