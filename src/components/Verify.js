import { Form, Field, Formik } from 'formik'
import { useNavigate, Link } from 'react-router-dom'
import * as yup from 'yup'
import { useOTP } from './contexts/otp'
import { verifyOTP } from './helpers/functions/verifyOTP'
import { generateOTP } from './helpers/functions/generateOPT'
import { useEffect } from 'react'

const verificationSchema = yup.object().shape({
    otp: yup.string().matches(/^[0-9]{6}$/gm, 'The code should be 6 digits').required('Verification code is required')
})


function Verify() {
    const navigate = useNavigate()
    const { phone, OTP:generatedOTP, setOTP} = useOTP() 
    console.log(`The OTP is ${generatedOTP}`)

    useEffect(() => {
        !generatedOTP && navigate('/login')
    })

    return (
        <Formik
            initialValues={{otp: ''}}
            validationSchema={verificationSchema}
            onSubmit={( values, { resetForm }) => {
                console.log(verifyOTP(values.otp, generatedOTP))
                if(generatedOTP === null) navigate('/login')
                if(verifyOTP(values.otp, generatedOTP)) {
                    navigate('/setPassword') 
                } else {
                    resetForm({values:''})
                    alert('Wrong OTP')
                }
            }}
        >
            {
                ({
                    touched,
                    errors
                }) => (
                    <div className="flex items-center justify-center h-screen">
                        <Form>
                            <div className="flex flex-col items-center w-8">
                                <div className="flex h-18 flex-col items-start mb-2"> 
                                    <label>OTP has been sent to {phone || '*******'}</label>
                                    <Field 
                                        name='otp'
                                        type='text'
                                        placeholder='Enter verification code'
                                    />
                                    {(errors.otp && touched.otp) && <p class="text-xs">{ errors.otp }</p>}
                                </div>
                                <div className="flex justify-center align-center w-full">
                                    <button 
                                        type='submit'
                                    >Verify</button> 
                                </div>
                                <div className='flex justify-between'>
                                    <Link to='/signup'>Change phone number?</Link>
                                    <button 
                                        onClick = {() => setOTP(generateOTP())}
                                    > Resend code</button>
                                </div>
                            </div>   
                        </Form>
                    </div>  
                )
            }
        </Formik>
        // <div>Verify</div>
    )
}

export default Verify