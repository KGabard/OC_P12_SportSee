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
import PropTypes from 'prop-types'

/**
 * CustomTooltip renders a custom tooltip for the average session chart.
 * @param {boolean} props.active Specifies if the tooltip is active or not.
 * @param {NameType} props.payload Data to be displayed in the tooltip.
 */
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

/**
 * AverageSessionsChart renders a linear chart that displays sessions lenght data.
 * @param {ConvertedSessionLengthType[]} props.sessions Array of session lenght data.
 * @returns {JSX.Element} A React component.
 */
const AverageSessionsChart = ({ sessions }: Props) => {
  return (
    <div className="average-sessions-chart">
      <h2 className="average-sessions-chart__title">
        Durée moyenne des sessions
      </h2>
      <ResponsiveContainer>
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
              fontFamily: 'Roboto, sans-serif',
              fontWeight: '500',
              fontSize: '12px',
            }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} />
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

AverageSessionsChart.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.string.isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default AverageSessionsChart
