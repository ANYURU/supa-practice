import React from 'react';
import supabase from './helpers/supabase/supabase';
import {Formik, Field, Form} from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom'

const loginSchema = yup.object().shape({
    username: yup.string().required('Email/Phone number is required!'),
    password: yup.string().min(6).required('Password is required!')
})

 const Login = () => {
    const [isSubmitting, setSubmitting] = React.useState(false)
    const navigate = useNavigate()

    return (
      <div class="flex justify-center items-center h-screen">
        <div class="shadow-lg rounded-md w-1/4 h-2/5 flex items-center justify-center">
            <Formik
            initialValues={{username:'', password:''}}
            validationSchema={loginSchema}
            onSubmit={async (values, { setSubmitting }) => {
                const { user, session, error } = await supabase.auth.signIn({
                    email: values.username,
                    password: values.password,
                })
                console.log(user)
                if(error) {
                    console.log(error)
                } else {
                    alert('Successfully loggedIn')
                }
            }}
            >
                {({ errors, touched, isValid }) => (
                    <Form >
                        <div class="flex flex-col items-center">
                            <div class="flex h-16 flex-col items-start mb-2"> 
                                <label>Username</label>
                                <Field 
                                name='username'
                                placeholder='Enter email/Phone number'
                                />
                                {(errors.username && touched.username) && <p class="text-xs">{ errors.username }</p>}
                            </div>
                            <div class="flex h-16 flex-col items-start mb-2">
                                <label>Password</label>
                                <Field
                                name='password'
                                type='password' 
                                placeholder='Enter password'                        
                                />
                                {errors.password && touched.password && <p class="text-xs">{ errors.password }</p>}
                            </div>
                            <Link to='/forgotpassword'>forgot password</Link>
                            <button type='submit' disabled={!isValid}>
                                login
                            </button>  
                            <div>Do not have an account? <button onClick={navigate('/signup')}>signup</button></div>
                        </div>
                    </Form>  
                )}
            </Formik>
        </div>
      </div>

  )
}

export default Login