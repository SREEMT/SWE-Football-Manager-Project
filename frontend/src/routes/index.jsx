import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import ForgotPassword from '../pages/ForgotPassWord'
import Inbox from '../pages/Inbox'
import Settings from '../pages/Settings'
import SignUp from '../pages/SignUp'
import Brackets from '../pages/Brackets'
import MatchesPage from '../pages/MatchesPage'

// Page routing paths for site
export default function AppRoutes() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/brackets" element={<Brackets />} />
        <Route path="/matches" element={<MatchesPage />} />
      </Routes>
    </main>
  )
}