import yogaIcon from '../assets/icons/yoga.svg'
import swimmingIcon from '../assets/icons/swimming.svg'
import cyclingIcon from '../assets/icons/cycling.svg'
import weightIcon from '../assets/icons/weight.svg'
import PropTypes from 'prop-types'

type Props = {
  activity: 'yoga' | 'swimming' | 'cycling' | 'weight'
}

const ActivityIcon = ({ activity }: Props) => {
  let currentIcon = ''

  switch (activity) {
    case 'yoga':
      currentIcon = yogaIcon
      break
    case 'swimming':
      currentIcon = swimmingIcon
      break
    case 'cycling':
      currentIcon = cyclingIcon
      break
    case 'weight':
      currentIcon = weightIcon
      break

    default:
      break
  }

  return (
    <div className="activity-icon">
      <img src={currentIcon} alt="activity" className="activity-icon__image" />
    </div>
  )
}

ActivityIcon.propTypes = {
  activity: PropTypes.oneOf(['yoga', 'swimming', 'cycling', 'weight'])
    .isRequired,
}

export default ActivityIcon
