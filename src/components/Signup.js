import { useState } from 'react'
import { Form, Field, Formik } from 'formik'
import * as yup from 'yup'
import supabase from './helpers/supabase/supabase'
import { Link } from 'react-router-dom'

const SIGNUP_SCHEMA = yup.object().shape({
    username: yup.string().required('Email/ phone number is required!'),
    password: yup.string().required('Password is required!')
})

const Signup = () => {
    const [ submitting, setSubmitting ] = useState(false)
    const [ phoneNumber, setPhoneNumber ] = useState(true)
   
    return (
        <Formik
            initialValues={{phoneNumber:'', password:''}}
            validationSchema={SIGNUP_SCHEMA}
            onSubmit={ async ( values ) => {
                const { user, session, error } = await supabase.auth.signUp(
                    


                ) 
            }}
        >
            {({
                touched,
                errors,
                isValid
            }) => (
                <div class="flex items-center justify-center h-screen">
                    <Form>
                        <div class="flex flex-col items-center">
                            <div class="flex h-16 flex-col items-start mb-2"> 
                                <label>Phone Number or Email</label>
                                <Field 
                                name='phoneNumber'
                                type='text'
                                placeholder='Enter phone number/ email.'
                                />
                                {(errors.phoneNumber && touched.phoneNumber) && <p class="text-xs">{ errors.phoneNumber }</p>}
                            </div>
                            <div class="flex justify-center align-center w-full">
                                <button type='submit'>Submit</button> 
                            </div>
                        </div>   
                    </Form>
                </div>    
            )}
    </Formik>
  )
}

export default Signup