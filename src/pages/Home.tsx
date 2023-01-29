import { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import { SportSeeApi } from '../scripts/api/SportSeeApi'
import { UserDataType } from '../scripts/types/Types'
import manIcon from '../assets/icons/man.svg'
import womaIcon from '../assets/icons/woman.svg'

function Home() {
  const [allUsersData, setAllUsersData] = useState<UserDataType[]>([])
  const sportSeeApi = new SportSeeApi()

  useEffect(() => {
    async function getAllUsersData() {
      const fetchAllUsersData = await sportSeeApi.getAllUsersData()
      if (fetchAllUsersData && fetchAllUsersData.length > 0)
        setAllUsersData(fetchAllUsersData)
    }
    getAllUsersData()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="home">
      <h1 className="home__header">
        Veuillez sélectionner un <em className="highlight">utilisateur</em>
      </h1>
      <div className="home__users-container">
        {allUsersData &&
          allUsersData.map((user, index) => {
            let userPicture = ''
            switch (index) {
              case 0:
                userPicture = manIcon
                break
              case 1:
                userPicture = womaIcon
                break

              default:
                break
            }
            return (
              <UserCard
                key={user.id}
                picture={userPicture}
                firstName={user.userInfos.firstName}
                lastName={user.userInfos.lastName}
                id={user.id}
              />
            )
          })}
      </div>
    </div>
  )
}

export default Home
