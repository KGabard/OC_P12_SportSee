import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from 'recharts'
import { NameType } from 'recharts/types/component/DefaultTooltipContent'
import { ConvertedPerformanceDataType } from '../scripts/types/Types'
import PropTypes from 'prop-types'

/**
 * CustomTooltip renders a custom tooltip for the performance chart.
 * @param {boolean} props.active Specifies if the tooltip is active or not.
 * @param {NameType} props.payload Data to be displayed in the tooltip.
 */
const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<number, NameType>) => {
  if (!active || !payload) {
    return null
  }

  return (
    <div className="performance-chart__tooltip">
      <p className="performance-chart__tooltip__label">
        {label !== undefined && label}
      </p>
      <p className="performance-chart__tooltip__label">
        {payload[0].value !== undefined && payload[0].value}
      </p>
    </div>
  )
}

type Props = {
  performances: ConvertedPerformanceDataType[]
}

/**
 * PerformanceChart renders a radar chart that displays performance data.
 * @param {ConvertedPerformanceDataType[]} props.performances Array of performance data.
 * @returns {JSX.Element} A React component.
 */
const PerformanceChart = ({ performances }: Props) => {
  return (
    <div className="performance-chart">
      <ResponsiveContainer>
        <RadarChart
          className="performance-chart__chart"
          margin={{
            top: 16,
            right: 16,
            left: 16,
            bottom: 16,
          }}
          data={performances}
          startAngle={30}
          endAngle={-330}
        >
          <PolarGrid radialLines={false} polarRadius={[10, 25, 50, 70]} />
          <PolarAngleAxis
            dataKey="kind"
            stroke="#fff"
            tickLine={false}
            tick={{
              fill: '#fff',
              fontFamily: 'Roboto, sans-serif',
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
          <Tooltip offset={24} content={<CustomTooltip />} cursor={false} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

PerformanceChart.propTypes = {
  performances: PropTypes.arrayOf(
    PropTypes.shape({
      kind: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default PerformanceChart
