import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import NotFound from '../pages/NotFound'
import ForgotPassword from '../pages/ForgotPassWord'
import Inbox from '../pages/Inbox'
import SignUp from '../pages/SignUp'
import Settings from '../pages/Settings'
import Brackets from '../pages/Brackets'
import MatchesPage from '../pages/MatchesPage'
import MatchShow from '../pages/MatchShow'
import Profile from '../pages/Profile'
import Account from '../pages/Account'

// Page routing paths for site
export default function AppRoutes() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />}/>
        <Route path="/brackets" element={<Brackets />} />
        <Route path="/matches" element={<MatchesPage />} />
        <Route path="/matches/:id" element={<MatchShow />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </main>
  )
}