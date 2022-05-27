import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BuildsOverview from './Builds/BuildsOverview'
import BuildDetailView from './Builds/BuildDetailView'
import UptimeCalculatorView from './Uptime/UptimeCalculatorView'
import ProtectedRoute from './Auth/ProtectedRoute'
import AuthenticationView from './Auth/AuthenticationView'
import * as Constants from './Constants'
import { UserAuthContextProvider } from './Auth/Auth.js'
import ProfileView from './Auth/ProfileView'

function App() {
  return (
    <UserAuthContextProvider>
      <BrowserRouter basename='/'>
        <Routes>
          <Route exact path='/' element={<BuildsOverview />} />
          <Route path='/build/:buildId' element={<BuildDetailView />} />
          <Route path='/uptime' element={<UptimeCalculatorView />} />
          <Route path='/sign-up' element={<AuthenticationView auth={Constants.AuthType.SignUp} />} />
          <Route path='/log-in' element={<AuthenticationView auth={Constants.AuthType.LogIn} />} />
          <Route path='/profile' element={<ProtectedRoute><ProfileView /></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </UserAuthContextProvider>

  )
}

export default App