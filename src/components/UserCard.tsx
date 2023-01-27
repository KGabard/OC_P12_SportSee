import yogaIcon from '../assets/icons/yoga.svg'
import swimmingIcon from '../assets/icons/swimming.svg'
import cyclingIcon from '../assets/icons/cycling.svg'
import weightIcon from '../assets/icons/weight.svg'
import { Link } from 'react-router-dom'

type Props = {
  firstName: string
  lastName: string
  id: number
}

const UserCard = ({ firstName, lastName, id }: Props) => {
  return (
    <Link to={`/user/${id}`} className="user-card">
      <img src="" alt="" className="user-card__image" />
      <div className="user-card__infos-container">
        <p className="user-card__infos-container__first-name">{firstName}</p>
        <p className="user-card__infos-container__last-name">{lastName}</p>
      </div>
    </Link>
  )
}

export default UserCard
