import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import ForgotPassword from '../pages/ForgotPassWord'
import Inbox from '../pages/Inbox'
import Settings from '../pages/Settings'
import Profile from '../pages/Profile'
import SignUp from '../pages/SignUp'
<<<<<<< HEAD
import TeamProfile from '../pages/TeamProfile'
=======
import PlayerProfile from '../pages/PlayerProfile'
>>>>>>> 93423f7c1121f04ba56805459f7e725986ff4a92

// Page routing paths for site
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/notFound" element={<NotFound />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />
<<<<<<< HEAD
      <Route path='/teamprofile' element={<TeamProfile />} />
=======
      <Route path='/playerprofile' element={<PlayerProfile />} />
>>>>>>> 93423f7c1121f04ba56805459f7e725986ff4a92
    </Routes>
  )
}