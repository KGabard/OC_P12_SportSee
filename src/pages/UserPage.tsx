import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ActivityChart from '../components/ActivityChart'
import AverageSessionsChart from '../components/AverageSessionsChart'
import NutrientCard from '../components/NutrientCard'
import PerformanceChart from '../components/PerformanceChart'
import ScoreChart from '../components/ScoreChart'
import { SportSeeApi } from '../scripts/api/SportSeeApi'
import { Activity } from '../scripts/models/Activity'
import { AverageSessions } from '../scripts/models/AverageSessions'
import { Performance } from '../scripts/models/Performance'
import { User } from '../scripts/models/User'

/**
 * User page. Presents data of the user with charts.
 * @returns {JSX.Element} A React component.
 */
const UserPage = () => {
  const { id: currentId } = useParams()
  const [userData, setUserData] = useState<User>()
  const [userActivity, setUserActivity] = useState<Activity>()
  const [userAverageSessions, setUserAverageSessions] =
    useState<AverageSessions>()
  const [userPerformance, setUserPerformance] = useState<Performance>()
  const sportSeeApi = new SportSeeApi()

  /**
   * useEffect hook for retrieving user data (global, activity, average session and performance) from the sportSeeApi and store them in the state.
   */
  useEffect(() => {
    if (!currentId || isNaN(parseInt(currentId))) return
    const numberCurrentId = parseInt(currentId)

    async function getUserData() {
      const fetchUserData = await sportSeeApi.getUserData(numberCurrentId)
      if (fetchUserData) setUserData(new User(fetchUserData))
    }

    async function getUserActivity() {
      const fetchUserActivity = await sportSeeApi.getUserActivity(
        numberCurrentId
      )
      if (fetchUserActivity) setUserActivity(new Activity(fetchUserActivity))
    }

    async function getUserAverageSessions() {
      const fetchUserAverageSessions = await sportSeeApi.getUserAverageSessions(
        numberCurrentId
      )
      if (fetchUserAverageSessions)
        setUserAverageSessions(new AverageSessions(fetchUserAverageSessions))
    }

    async function getUserPerformance() {
      const fetchUserPerformance = await sportSeeApi.getUserPerformance(
        numberCurrentId
      )
      if (fetchUserPerformance)
        setUserPerformance(new Performance(fetchUserPerformance))
    }

    getUserData()
    getUserActivity()
    getUserAverageSessions()
    getUserPerformance()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {userData && (
        <div className="user-page">
          <div className="user-page__header-container">
            <h1 className="user-page__header-container__title">
              Bonjour <em className="highlight">{userData.firstName}</em>
            </h1>
            <p className="user-page__header-container__text">
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
          </div>
          <div className="user-page__nutrients-list-container">
            <ul className="user-page__nutrients-list-container__list">
              <li className="user-page__nutrients-list-container__list__item">
                <NutrientCard
                  nutrient="calories"
                  quantity={userData.calorieCount}
                />
              </li>
              <li className="user-page__nutrients-list-container__list__item">
                <NutrientCard
                  nutrient="proteins"
                  quantity={userData.proteinCount}
                />
              </li>
              <li className="user-page__nutrients-list-container__list__item">
                <NutrientCard nutrient="carbs" quantity={userData.carbsCount} />
              </li>
              <li className="user-page__nutrients-list-container__list__item">
                <NutrientCard nutrient="fats" quantity={userData.lipidCount} />
              </li>
            </ul>
          </div>
          <div className="user-page__activity-chart-container">
            {userActivity && <ActivityChart sessions={userActivity.sessions} />}
          </div>
          <div className="user-page__average-sessions-chart-container">
            {userAverageSessions && (
              <AverageSessionsChart sessions={userAverageSessions.sessions} />
            )}
          </div>
          <div className="user-page__performance-chart-container">
            {userPerformance && (
              <PerformanceChart performances={userPerformance.performances} />
            )}
          </div>
          <div className="user-page__score-chart-container">
            {userData && <ScoreChart score={userData.todayScore} />}
          </div>
        </div>
      )}
    </>
  )
}

export default UserPage
