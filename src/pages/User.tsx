import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NutrientCard from '../components/NutrientCard'
import { SportSeeApi } from '../scripts/api/SportSeeApi'
import { UserDataType } from '../scripts/types/Types'

const User = () => {
  const { id: currentId } = useParams()
  const [userData, setUserData] = useState<UserDataType>()
  const [userActivity, setUserActivity] = useState<UserDataType>()
  const [userAverageSessions, setUserAverageSessions] = useState<UserDataType>()
  const [userPerformance, setUserPerformance] = useState<UserDataType>()
  const sportSeeApi = new SportSeeApi()

  useEffect(() => {
    if (!currentId || isNaN(parseInt(currentId))) return
    const numberCurrentId = parseInt(currentId)

    async function getUserData() {
      const fetchUserData = await sportSeeApi.getUserData(numberCurrentId)
      if (fetchUserData) setUserData(fetchUserData)
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
        setUserAverageSessions(fetchUserAverageSessions)
    }

    async function getUserPerformance() {
      const fetchUserPerformance = await sportSeeApi.getUserPerformance(
        numberCurrentId
      )
      if (fetchUserPerformance) setUserPerformance(fetchUserPerformance)
    }

    getUserData()
    getUserActivity()
    getUserAverageSessions()
    getUserPerformance()
    // eslint-disable-next-line
  }, [])

  console.log(userData)
  console.log(userActivity)
  console.log(userAverageSessions)
  console.log(userPerformance)

  return (
    <>
      {userData && (
        <div className="user">
          <div className="user__header-container">
            <h1 className="user__header-container__title">
              Bonjour{' '}
              <em className="highlight">{userData.userInfos.firstName}</em>
            </h1>
            <p className="user__header-container__text">
              Félicitation ! Vous avez explosé vos objectifs hier 👏
            </p>
          </div>
          <div className="user__nutrients-list-container">
            <ul className="user__nutrients-list-container__list">
              <li className="user__nutrients-list-container__list__item">
                <NutrientCard
                  nutrient="calories"
                  quantity={userData.keyData.calorieCount}
                />
              </li>
              <li className="user__nutrients-list-container__list__item">
                <NutrientCard
                  nutrient="proteins"
                  quantity={userData.keyData.proteinCount}
                />
              </li>
              <li className="user__nutrients-list-container__list__item">
                <NutrientCard
                  nutrient="carbs"
                  quantity={userData.keyData.carbohydrateCount}
                />
              </li>
              <li className="user__nutrients-list-container__list__item">
                <NutrientCard
                  nutrient="fats"
                  quantity={userData.keyData.lipidCount}
                />
              </li>
            </ul>
          </div>
          <div className="user__activities-chart-container"></div>
          <div className="user__durations-chart-container"></div>
          <div className="user__performance-chart-container"></div>
          <div className="user__score-chart-container"></div>
        </div>
      )}
    </>
  )
}

export default User
