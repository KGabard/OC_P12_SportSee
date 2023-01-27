import NutrientCard from '../components/NutrientCard'

const Home = () => {
  return (
    <div className="home">
      <div className="home__header-container">
        <h1 className="home__header-container__title">
          Bonjour <em className="highlight">Thomas</em>
        </h1>
        <p className="home__header-container__text">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
      <div className="home__nutrients-list-container">
        <ul className="home__nutrients-list-container__list">
          <li className="home__nutrients-list-container__list__item">
            <NutrientCard nutrient="calories" quantity={1930} />
          </li>
          <li className="home__nutrients-list-container__list__item">
            <NutrientCard nutrient="proteins" quantity={155} />
          </li>
          <li className="home__nutrients-list-container__list__item">
            <NutrientCard nutrient="carbs" quantity={290} />
          </li>
          <li className="home__nutrients-list-container__list__item">
            <NutrientCard nutrient="fats" quantity={50} />
          </li>
        </ul>
      </div>
      <div className="home__activities-chart-container"></div>
      <div className="home__durations-chart-container"></div>
      <div className="home__performance-chart-container"></div>
      <div className="home__score-chart-container"></div>
    </div>
  )
}

export default Home
