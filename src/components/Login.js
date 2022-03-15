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
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', border:'solid 1px', height:'100vh'}}>
        <div>
            <Formik
            initialValues={{username:'', password:''}}
            validationSchema={loginSchema}
            onSubmit={async (values, { setSubmitting }) => {
                const { user, session, error } = await supabase.auth.signUp({
                    email: values.username,
                    password: values.password,
                })
                console.log(user)
                if(error) {
                    alert(error)
                } else {
                    alert('Voila, Successfully Signed Up')
                }

            

            }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div>
                            <label>Username</label>
                        </div>
                        <div>
                            <Field 
                            name='username'
                            type='email'
                            placeholder='johndoe@gmail.com'
                            />
                        </div>
                        {(errors.username && touched.username) && <p>{errors.username}</p>}
                        <div>
                            <label>Password</label>
                        </div>
                        <div>
                            <Field
                            name='password'
                            type='password' 
                            placeholder='***********'                        
                            />
                        </div>
                        {errors.password && touched.password && <p>{errors.password}</p>}
                        <button type='submit' disabled={isSubmitting}>
                            Login
                        </button>    
                    </Form>  
                )}
            </Formik>
        </div>
      </div>

  )
}

export default Login