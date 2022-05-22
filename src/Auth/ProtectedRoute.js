import { useUserAuth } from './Auth'
import AuthenticationPrompt from './AuthenticationPrompt'

const ProtectedRoute = ({ children }) => {
    let { user } = useUserAuth()
    if (!user) {
        return <AuthenticationPrompt />
    }
    return children
}

export default ProtectedRoute