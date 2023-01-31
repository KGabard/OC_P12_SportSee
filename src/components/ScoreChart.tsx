import { RadialBar, RadialBarChart, ResponsiveContainer } from 'recharts'

type Props = {
  score: number
}

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
      <ResponsiveContainer >
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
          <RadialBar className="score-chart__chart__bar" dataKey="value" cornerRadius={100} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ScoreChart
