import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

type Props = {
  picture: string
  firstName: string
  lastName: string
  id: number
}

const UserCard = ({ picture, firstName, lastName, id }: Props) => {
  return (
    <Link to={`/user/${id}`} className="user-card">
      <img src={picture} alt="utilisateur" className="user-card__image" />
      <div className="user-card__infos-container">
        <p className="user-card__infos-container__first-name">{firstName}</p>
        <p className="user-card__infos-container__last-name">{lastName}</p>
      </div>
    </Link>
  )
}

UserCard.prototype = {
  picture: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
}

export default UserCard
