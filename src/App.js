import { HashRouter, Route, Routes } from 'react-router-dom'
import BuildsOverview from './Builds/BuildsOverview'
import BuildDetailView from './Builds/BuildDetailView'
import UptimeCalculatorView from './Uptime/UptimeCalculatorView'
import ProtectedRoute from './Auth/ProtectedRoute'
import AuthenticationView from './Auth/AuthenticationView'
import * as Constants from './Constants'
import { UserAuthContextProvider } from './Auth/Auth.js'
import ProfileView from './Auth/ProfileView'
import StatsOverview from './Stats/StatsOverview'
import BuilderOverview from './Builder/BuilderOverview'
import BuilderDetailView from './Builder/BuilderDetailView'
import AboutPage from './AboutPage'
import NotFoundPage from './NotFoundPage'

function App() {
  return (
    <UserAuthContextProvider>
      <HashRouter basename='/'>
        <Routes>
          <Route exact path='/' element={<BuildsOverview />} />
          <Route path='/build/:buildId' element={<BuildDetailView />} />
          <Route path='/uptime' element={<UptimeCalculatorView />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/sign-up' element={<AuthenticationView auth={Constants.AuthType.SignUp} />} />
          <Route path='/log-in' element={<AuthenticationView auth={Constants.AuthType.LogIn} />} />
          <Route path='/profile' element={<ProtectedRoute><ProfileView /></ProtectedRoute>} />
          <Route path='/stats' element={<ProtectedRoute><StatsOverview /></ProtectedRoute>} />
          <Route path='/builder' element={<ProtectedRoute><BuilderOverview /></ProtectedRoute>} />
          <Route path='/builder/build/:buildId' element={<ProtectedRoute><BuilderDetailView /></ProtectedRoute>} />
          <Route path='/404' element={<NotFoundPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </HashRouter>
    </UserAuthContextProvider>

  )
}

export default App