import React from 'react';
import supabase from './helpers/supabase/supabase';
import {Formik, Field, Form} from 'formik';
import * as yup from 'yup';

const loginSchema = yup.object().shape({
    username: yup.string().required('Username is required!'),
    password: yup.string().required('Password is required!')
})

function Login() {
    const [isSubmitting, setSubmitting] = React.useState(false)
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
                    alert('Voila, Successfully Signed Up')
                }
            }}
            >
                {({ errors, touched }) => (
                    <Form >
                        <div class="flex flex-col items-center">
                            <div class="flex h-16 flex-col items-start mb-2"> 
                                <label >Username</label>
                                <Field 
                                name='username'
                                type='email'
                                placeholder='johndoe@gmail.com'
                                />
                                {(errors.username && touched.username) && <p class="text-xs">{ errors.username }</p>}
                            </div>
                            <div class="flex h-16 flex-col items-start mb-2">
                                <label>Password</label>
                                <Field
                                name='password'
                                type='password' 
                                placeholder='***********'                        
                                />
                                {errors.password && touched.password && <p class="text-xs">{ errors.password }</p>}
                            </div>
                            <button type='submit' disabled={isSubmitting}>
                                Login
                            </button>    
                        </div>
                    </Form>  
                )}
            </Formik>
        </div>
      </div>

  )
}

export default Login