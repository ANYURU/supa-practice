import { Form, Field, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'
import { countryCodes } from './helpers/data/countryCodes'
import { useOTP } from './contexts/otp'
import { generateOTP } from './helpers/functions/generateOPT'

const phoneNumbers = [
    '772519722',
    '700820686',
    '757501751',
]

const SIGNUP_SCHEMA = yup.object().shape({
    countryCode: yup.string().required('Please select country code'),
    phone: yup.string().matches(/^[0-9]{9}/gm, 'Invalid phone number!').notOneOf(phoneNumbers, 'Phone Number already taken').required('Phone number is required!'),  
})


const Signup = () => {   
    const navigate = useNavigate()
    const { setPhone, setOTP } = useOTP()
    
    return (
        <Formik
            initialValues={{ phone:'', countryCode:'' }}
            validationSchema={SIGNUP_SCHEMA}
            onSubmit={ async ( values ) => {
                setPhone(values.countryCode.concat(values.phone))
                console.log(values.countryCode.concat(values.phone))

                //[] Generate a one time password and set it for some time.
                setOTP(await generateOTP())
                
                //[*] Navigate to the verification component.
                navigate('/verify')
                //[] Invoke the SMS service provider to send a verification code to the phone number.
                //[] Verify if the generated code and codes are the same. 
                //[]Return informative feedback.
            }}
        >
            {({
                touched,
                errors,
            }) => (
                <div className="flex items-center justify-center h-screen">
                    <Form>
                        <div className="flex flex-col items-center w-8">
                            <div className="flex h-18 flex-col items-start mb-2"> 
                                
                                <label>Enter phone number.</label>
                                <div className='flex'>
                                    <Field 
                                    name='countryCode'
                                    as='select'
                                    >
                                        {countryCodes.map((country, index) => <option value={country.dialCode} key={index}>{`${country.flag} ${country.iso}`}</option>)}
                                    </Field>
                                    <Field 
                                    className='w-24'
                                    name='phone'
                                    // type='text'
                                    placeholder='772529722'
                                    />
                                </div>
                                {(errors.phone && touched.phone) && <p className="text-xs">{ errors.phone }</p>}
                                {(errors.countryCode && touched.countryCode) && <p className="text-xs">{errors.countryCode}</p>}
                            </div>
                            <div className="flex justify-center align-center w-full">
                                <button 
                                    type='submit'
                                >Submit</button> 
                            </div>
                        </div>   
                    </Form>
                </div>    
            )}
    </Formik>
  )
}

export default Signup