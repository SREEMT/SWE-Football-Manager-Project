import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import ForgotPassword from '../pages/ForgotPassWord'
import Inbox from '../pages/Inbox'
import Settings from '../pages/Settings'
import ProtectedRoute from '../components/ProtectedRoute'

// Page routing paths for site
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<Sign-Up />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      
      <Route path="/inbox" element={
        <ProtectedRoute>
          <Inbox />
        </ProtectedRoute>
      } />
      <Route path="/settings" element={
        <ProtectedRoute>
          <Settings />
        </ProtectedRoute>
      } />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}