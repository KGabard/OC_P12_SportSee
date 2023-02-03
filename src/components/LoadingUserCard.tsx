/**
 * LoadingUserCard is a component that displays a loading card of the user while the data is not fetched
 * @returns {JSX.Element} A React component.
 */
const LoadingUserCard = () => {
  return (
    <div className="loading-user-card">
      <div className="loading-user-card__image"></div>
      <div className="loading-user-card__infos-container">
        <div className="loading-user-card__infos-container__text"></div>
        <div className="loading-user-card__infos-container__text"></div>
      </div>
    </div>
  )
}

export default LoadingUserCard
