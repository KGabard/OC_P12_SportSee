import { Route, Routes } from 'react-router-dom'
import Community from '../pages/Community'
import UserPage from '../pages/UserPage'
import Profile from '../pages/Profile'
import Settings from '../pages/Settings'
import Home from '../pages/Home'

/**
 * Router component for handling routing in the application.
 * @returns {JSX.Element} Routed components based on the path.
 */
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/user/:id" element={<UserPage />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/settings" element={<Settings />}></Route>
      <Route path="/community" element={<Community />}></Route>
    </Routes>
  )
}

export default Router
