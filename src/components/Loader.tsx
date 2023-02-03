/**
 * Displays a loader when data is loading.
 * @returns {JSX.Element}
 */
const Loader = () => {
  return (
    <div className="loader">
      <div className="loader__square loader__square--1"></div>
      <div className="loader__square loader__square--2"></div>
      <div className="loader__square loader__square--3"></div>
    </div>
  )
}

export default Loader
