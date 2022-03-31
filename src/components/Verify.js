import { Form, Field, Formik } from 'formik'
import { useNavigate, Link } from 'react-router-dom'
import * as yup from 'yup'

const verificationSchema = yup.object().shape({
    otp: yup.string().matches('/^[0-9]{6}$', 'The code should be 6 digits').required('Verification code is required')
})


function Verify({ phone, generatedOTP }) {
    const navigate = useNavigate()

    return (
        <Formik
            initialValues={{otp: ''}}
            validationSchema={verificationSchema}
            onSubmit={() => {
                navigate('/setPassword')
            }}
        >
            {
                ({
                    touched,
                    errors
                }) => (
                    <div class="flex items-center justify-center h-screen">
                        <Form>
                            <div class="flex flex-col items-center w-8">
                                <div class="flex h-18 flex-col items-start mb-2"> 
                                    <label>OTP has been sent to {phone || '*******'}</label>
                                    <Field 
                                        name='otp'
                                        type='text'
                                        placeholder='Enter verification code'
                                    />
                                    {(errors.otp && touched.otp) && <p class="text-xs">{ errors.otp }</p>}
                                </div>
                                <div class="flex justify-center align-center w-full">
                                    <button 
                                        type='submit'
                                    >Verify</button> 
                                </div>
                                <div>
                                    <Link to='/signup'>Change phone number?</Link>
                                    <button 
                                        onclick
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