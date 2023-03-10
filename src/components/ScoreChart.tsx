import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'
import PropTypes from 'prop-types'

type Props = {
  score: number
}

/**
 * ScoreChart renders a radial bar chart that displays the today score.
 * @param {number} props.score Score to display.
 * @returns {JSX.Element} A React component.
 */
const ScoreChart = ({ score }: Props) => {
  const data = [
    {
      name: 'max',
      value: 100,
      fill: 'transparent',
    },
    {
      name: 'score',
      value: score,
      fill: 'var(--highlight-primary)',
    },
  ]

  return (
    <div className="score-chart">
      <h2 className="score-chart__title">Score</h2>
      <div className="score-chart__infos">
        <p className="score-chart__infos__percentage">{`${score}%`}</p>
        <p className="score-chart__infos__text">{'de votre\nobjectif'}</p>
      </div>
      <div className="score-chart__circle-container">
        <div className="score-chart__circle"></div>
      </div>
      <ResponsiveContainer>
        <RadialBarChart
          className="score-chart__chart"
          innerRadius="55%"
          outerRadius="80%"
          data={data}
          startAngle={90}
          endAngle={450}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
          }}
        >
          <RadialBar
            className="score-chart__chart__bar"
            dataKey="value"
            cornerRadius={100}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

ScoreChart.prototype = {
  score: PropTypes.number.isRequired,
}

export default ScoreChart
