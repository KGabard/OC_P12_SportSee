import caloriesIcon from '../assets/icons/calories.svg'
import proteinsIcon from '../assets/icons/proteins.svg'
import carbsIcon from '../assets/icons/carbs.svg'
import fatsIcon from '../assets/icons/fats.svg'
import { numberToString } from '../scripts/utils/Utils'
import PropTypes from 'prop-types'

type Props = {
  nutrient: 'calories' | 'proteins' | 'carbs' | 'fats'
  quantity: number
}

/**
 * NutrientCard is a component that displays a card based on the type of nutrient.
 * @param {'calories' | 'proteins' | 'carbs' | 'fats'} props.nutrient The type of nutrient.
 * @param {number} props.quantity The quantity of nutrient.
 * @returns {JSX.Element} A React component.
 */
const NutrientCard = ({ nutrient, quantity }: Props) => {
  let currentIcon = ''
  let label = ''
  let unit = ''
  let color = ''

  switch (nutrient) {
    case 'calories':
      currentIcon = caloriesIcon
      label = 'Calories'
      unit = 'kCal'
      color = 'primary'
      break
    case 'proteins':
      currentIcon = proteinsIcon
      label = 'Protéines'
      unit = 'g'
      color = 'secondary'
      break
    case 'carbs':
      currentIcon = carbsIcon
      label = 'Glucides'
      unit = 'g'
      color = 'tertiary'
      break
    case 'fats':
      currentIcon = fatsIcon
      label = 'Lipides'
      unit = 'g'
      color = 'quaternary'
      break

    default:
      break
  }

  return (
    <div className="nutrient-card">
      <div
        className={`nutrient-card__icon-container nutrient-card__icon-container--${color}`}
      >
        <img
          src={currentIcon}
          alt="nutrient"
          className="nutrient-card__icon-container__icon"
        />
      </div>
      <div className="nutrient-card__infos-container">
        <p className="nutrient-card__infos-container__quantity">
          {numberToString(quantity) + unit}
        </p>
        <h2 className="nutrient-card__infos-container__label">{label}</h2>
      </div>
    </div>
  )
}

NutrientCard.propTypes = {
  nutrient: PropTypes.oneOf(['calories', 'proteins', 'carbs', 'fats'])
    .isRequired,
  quantity: PropTypes.number,
}

export default NutrientCard
