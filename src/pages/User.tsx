import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import NutrientCard from '../components/NutrientCard'
import { SportSeeApi } from '../scripts/api/SportSeeApi'
import { UserDataType } from '../scripts/types/Types'

const User = () => {
  const { id: currentId } = useParams()
  const [userData, setUserData] = useState<UserDataType>()
  const sportSeeApi = new SportSeeApi()

  useEffect(() => {
    async function getUserData() {
      if (!currentId || isNaN(parseInt(currentId))) return
      const fetchUserData = await sportSeeApi.getUserData(parseInt(currentId))
      if (fetchUserData) setUserData(fetchUserData)
    }
    getUserData()
    // eslint-disable-next-line
  }, [])

  console.log(userData)

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
                <NutrientCard nutrient="calories" quantity={userData.keyData.calorieCount} />
              </li>
              <li className="user__nutrients-list-container__list__item">
                <NutrientCard nutrient="proteins" quantity={userData.keyData.proteinCount} />
              </li>
              <li className="user__nutrients-list-container__list__item">
                <NutrientCard nutrient="carbs" quantity={userData.keyData.carbohydrateCount} />
              </li>
              <li className="user__nutrients-list-container__list__item">
                <NutrientCard nutrient="fats" quantity={userData.keyData.lipidCount} />
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
