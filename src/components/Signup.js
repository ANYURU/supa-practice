import { useState } from 'react'
import { Form, Field, Formik } from 'formik'
import * as yup from 'yup'
import supabase from './helpers/supabase/supabase'

const SIGNUP_SCHEMA = yup.object().shape({
    username: yup.string().required('Email/ phone number is required!'),
    password: yup.string().required('Password is required!')
})

const Signup = () => {
    
    return (
        <Formik
            initialValues={{phoneNumber:'', password:''}}
            validationSchema={SIGNUP_SCHEMA}
            onSubmit={ async ( values ) => {
                // Generate a one time password and set it for some time.
                // Invoke the SMS service provider to send a verification code to the phone number.
                // Check if the two verification codes match. 
                // Return informative feedback.
                const { user, session, error } = await supabase.auth.signUp(

                    


                ) 
            }}
        >
            {({
                touched,
                errors,
                isValid, 
            }) => (
                <div class="flex items-center justify-center h-screen">
                    <Form>
                        <div class="flex flex-col items-center w-8">
                            <div class="flex h-18 flex-col items-start mb-2"> 
                                
                                <label>Enter phone number.</label>
                                <Field 
                                name='phoneNumber'
                                type='text'
                                placeholder='Enter phone number.'
                                />
                                {(errors.phoneNumber && touched.phoneNumber) && <p class="text-xs">{ errors.phoneNumber }</p>}
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