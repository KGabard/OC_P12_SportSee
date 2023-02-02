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
import PropTypes from 'prop-types'

const caloriesCoef = 0.2

/**
 * CustomTooltip renders a custom tooltip for the activity chart.
 * @param {boolean} props.active Specifies if the tooltip is active or not.
 * @param {NameType} props.payload Data to be displayed in the tooltip.
 */
const CustomTooltip = ({ active, payload }: TooltipProps<number, NameType>) => {
  if (!active || !payload) {
    return null
  }

  return (
    <div className="activity-chart__tooltip">
      <p className="activity-chart__tooltip__label">
        {payload[0].value !== undefined && payload[0].value}kg
      </p>
      <p className="activity-chart__tooltip__label">
        {payload[1].value !== undefined &&
          Math.round(payload[1].value / caloriesCoef)}
        kCal
      </p>
    </div>
  )
}

/**
 * Applies a coefficient to the calories value in each session activity data.
 * @param {SessionActivityType[]} sessions Array of session activity data.
 * @param {number} coef The coefficient to apply to the calories value.
 * @returns {SessionActivityType[]} Array of session activity data with the applied coefficient.
 */
const applyCoefToCalories = (
  sessions: SessionActivityType[],
  coef: number
): SessionActivityType[] => {
  return sessions.map((session) => {
    return { ...session, calories: session.calories * coef }
  })
}

type Props = {
  sessions: SessionActivityType[]
}

/**
 * ActivityChart renders a bar chart that displays activity data
 * @param {SessionActivityType[]} props.sessions Array of session activity data
 * @returns {JSX.Element} A React component
 */
const ActivityChart = ({ sessions }: Props) => {
  const sessionsWithCoef = applyCoefToCalories(sessions, caloriesCoef)

  return (
    <div className="activity-chart">
      <h2 className="activity-chart__title">Activité quotidienne</h2>
      <div className="activity-chart__legend">
        <p className="activity-chart__legend__kilogram">Poids (kg)</p>
        <p className="activity-chart__legend__calories">
          Calories brûlées (kCal)
        </p>
      </div>
      <ResponsiveContainer>
        <BarChart
          className="activity-chart__chart"
          data={sessionsWithCoef}
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
              fontFamily: 'Roboto, sans-serif',
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
              fontFamily: 'Roboto, sans-serif',
              fontWeight: '500',
              fontSize: '12px',
            }}
          />
          <Tooltip
            offset={32}
            content={<CustomTooltip />}
            cursor={{ opacity: '0.3' }}
          />
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

ActivityChart.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default ActivityChart
