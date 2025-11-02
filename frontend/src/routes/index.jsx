import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import ForgotPassword from '../pages/ForgotPassWord'
import Inbox from '../pages/Inbox'

// Page routing paths for site
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/notFound" element={<NotFound />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      <Route path="/inbox" element={<Inbox />} />
    </Routes>
  )
}