import caloriesIcon from '../assets/icons/calories.svg'
import proteinsIcon from '../assets/icons/proteins.svg'
import carbsIcon from '../assets/icons/carbs.svg'
import fatsIcon from '../assets/icons/fats.svg'
import { numberToString } from '../scripts/utils/Utils'

type Props = {
  nutrient: 'calories' | 'proteins' | 'carbs' | 'fats'
  quantity: number
}

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

export default NutrientCard
