import {
  XAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
  BarChart,
  CartesianGrid,
  YAxis,
  Bar,
} from 'recharts'
import { NameType } from 'recharts/types/component/DefaultTooltipContent'
import { SessionActivityType } from '../scripts/types/Types'
import { convertDuration } from '../scripts/utils/Utils'

const CustomTooltip = ({ active, payload }: TooltipProps<number, NameType>) => {
  if (!active || !payload) {
    return null
  }

  return (
    <div className="activity-chart__tooltip">
      <p className="activity-chart__tooltip__label">
        {payload[0].value !== undefined && payload[0].value}
      </p>
      <p className="activity-chart__tooltip__label">
        {payload[1].value !== undefined && payload[1].value}
      </p>
    </div>
  )
}

type Props = {
  sessions: SessionActivityType[]
}

const ActivityChart = ({ sessions }: Props) => {
  return (
    <div className="activity-chart">
      <h2 className="activity-chart__title">Activité quotidienne</h2>
      <ResponsiveContainer>
        <BarChart
        className='activity-chart__chart'
          width={730}
          height={250}
          data={sessions}
          margin={{
            top: 96,
            right: 16,
            left: 32,
            bottom: 16,
          }}
        >
          <CartesianGrid
            strokeDasharray="2 2"
            horizontal={true}
            vertical={false}
          />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{
              fill: '#000',
              opacity: 0.7,
              fontFamily: 'Roboto',
              fontWeight: '500',
              fontSize: '12px',
            }}
          />
          <YAxis
            orientation="right"
            tickLine={false}
            axisLine={false}
            tick={{
              fill: '#000',
              opacity: 0.7,
              fontFamily: 'Roboto',
              fontWeight: '500',
              fontSize: '12px',
            }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="kilogram"
            fill="#000"
            radius={[10, 10, 0, 0]}
            barSize={10}
          />
          <Bar
            dataKey="calories"
            fill="var(--highlight-primary)"
            radius={[10, 10, 0, 0]}
            barSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ActivityChart
