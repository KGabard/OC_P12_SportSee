import ActivityIcon from '../components/ActivityIcon'

const SideBar = () => {
  return (
    <>
      <aside className="side-bar">
        <div className="side-bar__activities">
          <ul className="side-bar__activities__list">
            <li className="side-bar__activities__list__item">
              <ActivityIcon activity="yoga" />
            </li>
            <li className="side-bar__activities__list__item">
              <ActivityIcon activity="swimming" />
            </li>
            <li className="side-bar__activities__list__item">
              <ActivityIcon activity="cycling" />
            </li>
            <li className="side-bar__activities__list__item">
              <ActivityIcon activity="weight" />
            </li>
          </ul>
        </div>
        <h2 className="side-bar__copyright">Copyright, SportSee 2020</h2>
      </aside>
    </>
  )
}

export default SideBar
