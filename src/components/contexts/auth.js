import { 
    createContext,
    useContext,
    useState,
} from 'react'
const AuthContext = createContext()


export const useAuth = () => {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [ user, setUser ] = useState( null )
    const values = {
        user, 
        setUser
    }

    return (
        <AuthContext.Provider value={ values }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider