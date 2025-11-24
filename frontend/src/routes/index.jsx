import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import ForgotPassword from '../pages/ForgotPassWord'
import Inbox from '../pages/Inbox'
import SignUp from '../pages/SignUp'
import Settings from '../pages/Settings'
import Profile from '../pages/Profile'

// Page routing paths for site
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/notFound" element={<NotFound />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/inbox" element={<Inbox />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />}/>
    </Routes>
  )
}