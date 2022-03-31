import {
    createContext,
    useContext,
    useState
} from 'react'

const OTPContext = createContext()

export const useOTP = () => {
    return useContext(OTPContext) 
}


export function OTPProvider({ children }) {
    const [ OTP, setOTP ] = useState(null)
    const [ phone, setPhone ] = useState('')

    const initialValues = {
        OTP,
        phone, 
        setOTP,
        setPhone
    }

    return (
        <OTPContext.Provider value={ initialValues }>
            {children}
        </OTPContext.Provider>
    )
}

// export default OTPProvider