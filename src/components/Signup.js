import { Form, Field, Formik } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'



const SIGNUP_SCHEMA = yup.object().shape({
    phone: yup.string().required('Phone number is required!'),  
})






const Signup = () => {   
    const navigate = useNavigate()
    
    return (
        <Formik
            initialValues={{phone:''}}
            validationSchema={SIGNUP_SCHEMA}
            onSubmit={ async ( values ) => {
                //[*] Generate a one time password and set it for some time.
                // const OTP = generateOTP()
                
                //[*] Navigate to the verification component.
                navigate('/verify')
                
                //[*] Invoke the SMS service provider to send a verification code to the phone number.


                

                //[] Verify if the generated code and codes are the same. 

                //[]Return informative feedback.



            }}
        >
            {({
                touched,
                errors,
            }) => (
                <div class="flex items-center justify-center h-screen">
                    <Form>
                        <div class="flex flex-col items-center w-8">
                            <div class="flex h-18 flex-col items-start mb-2"> 
                                
                                <label>Enter phone number.</label>
                                <Field 
                                name='phone'
                                type='text'
                                placeholder='Enter phone number.'
                                />
                                {(errors.phone && touched.phone) && <p class="text-xs">{ errors.phone }</p>}
                            </div>
                            <div class="flex justify-center align-center w-full">
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