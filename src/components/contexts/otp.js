import {
    Children,
    createContext,
    useContext,
    useState
} from 'react'

const OTPContext = createContext()

export const useOTP = () => {
    return useContext(OTPContext) 
}


function OTPProvider({children}) {
    const [ OTP, setOTP ] = useState(null)
    const [ phone, setPhone ] = useState('')

    const initialValues = {
        OTP,
        phone, 
        setOTP,
        setPhone
    }

    return (
        <OTPProvider.Provider value={initialValues}>
            {children}
        </OTPProvider.Provider>
    )
}

export default OTP