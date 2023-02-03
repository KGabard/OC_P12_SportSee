import { useEffect, useState } from 'react'
import UserCard from '../components/UserCard'
import { SportSeeApi } from '../scripts/api/SportSeeApi'
import manIcon from '../assets/icons/man.svg'
import womaIcon from '../assets/icons/woman.svg'
import { User } from '../scripts/models/User'
import LoadingUserCard from '../components/LoadingUserCard'

/**
 * Home page. Presents the different users of the site.
 * @returns {JSX.Element} A React component.
 */
function Home() {
  const [allUsersData, setAllUsersData] = useState<User[]>([])
  const sportSeeApi = new SportSeeApi()

  /**
   * useEffect hook for retrieving all users data from the sportSeeApi and store them in the state.
   */
  useEffect(() => {
    async function getAllUsersData() {
      const fetchAllUsersData = await sportSeeApi.getAllUsersData()
      if (fetchAllUsersData && fetchAllUsersData.length > 0) {
        const usersArray: User[] = []
        fetchAllUsersData.forEach((fetchUser) => {
          usersArray.push(new User(fetchUser))
        })
        setAllUsersData(usersArray)
      }
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
        {allUsersData.length === 0 && (
          <>
            <LoadingUserCard />
            <LoadingUserCard />
          </>
        )}
        {allUsersData.length > 0 &&
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
                firstName={user.firstName}
                lastName={user.lastName}
                id={user.id}
              />
            )
          })}
      </div>
    </div>
  )
}

export default Home
