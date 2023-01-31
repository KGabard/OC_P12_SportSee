import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import AverageSessionsChart from '../components/AverageSessionsChart'
import NutrientCard from '../components/NutrientCard'
import ScoreChart from '../components/ScoreChart'
import { SportSeeApi } from '../scripts/api/SportSeeApi'
import { AverageSessions } from '../scripts/models/AverageSessions'
import { Performance } from '../scripts/models/Performance'
import { User } from '../scripts/models/User'
import { ActivityType } from '../scripts/types/Types'

const UserPage = () => {
  const { id: currentId } = useParams()
  const [userData, setUserData] = useState<User>()
  const [userActivity, setUserActivity] = useState<ActivityType>()
  const [userAverageSessions, setUserAverageSessions] =
    useState<AverageSessions>()
  const [userPerformance, setUserPerformance] = useState<Performance>()
  const sportSeeApi = new SportSeeApi()

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
      if (fetchUserActivity) setUserActivity(fetchUserActivity)
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

  // console.log(userData)
  // console.log(userActivity)
  // console.log(userAverageSessions)
  console.log(userPerformance?.performances)

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
          <div className="user-page__activity-chart-container"></div>
          <div className="user-page__average-sessions-chart-container">
            {userAverageSessions && (
              <AverageSessionsChart sessions={userAverageSessions.sessions} />
            )}
          </div>
          <div className="user-page__performance-chart-container"></div>
          <div className="user-page__score-chart-container">
            {userData && <ScoreChart score={userData.todayScore} />}
          </div>
        </div>
      )}
    </>
  )
}

export default UserPage
