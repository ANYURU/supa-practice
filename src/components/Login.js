import {useState, useEffect} from 'react';
import supabase from './helpers/supabase/supabase';
import {Formik, Field, Form} from 'formik';
import * as yup from 'yup';
import { Link, useNavigate } from 'react-router-dom'
import Signup from './Signup';

const loginByEmailSchema = yup.object().shape({
    username: yup.string().required('Email is required!'),
    password: yup.string().min(6).required('Password is required!')
})

const loginByPhoneSchema = yup.object().shape({
    username: yup.string().required('Phone Number is required!'),
    password: yup.string().min(6).required('Password is required')

})

 const Login = () => {
    const [ isSubmitting, setSubmitting] = useState(false)
    const [ phoneLogin, setPhoneLogin ] = useState(true)
    const navigate = useNavigate()

    useEffect(() => {

    }, [ phoneLogin ])

    return (
      <div className="flex justify-center items-center h-screen">
        <div className="shadow-lg w-3/12 h-2/5 flex flex-col">
          <div className="flex justify-between h-12 items-center w-full mb-3 border-black">
            <button id="loginByPhone" className="flex-1 h-full align-middle p-4 bg-blue-700" onClick={() => {
                setPhoneLogin(true)
                document.getElementById('loginByPhone').classList.add('bg-blue-700')
                document.getElementById('loginByPhone').classList.remove('border-2', 'border-black')
                document.getElementById('loginByEmail').classList.add('border-2', 'border-black')
                document.getElementById('loginByEmail').classList.remove('bg-blue-700')
            }}>Login with phone</button>
            <button id="loginByEmail" className="flex-1 h-full align-middle p-4 border-2 border-black" onClick={() => {
                setPhoneLogin(false)
                document.getElementById('loginByEmail').classList.add('bg-blue-700')
                document.getElementById('loginByEmail').classList.remove('border-2', 'border-black')
                document.getElementById('loginByPhone').classList.add('border-2', 'border-black')
                document.getElementById('loginByPhone').classList.remove('bg-blue-700')
            }}>Login with email</button>
          </div>
            <Formik
            initialValues={{username:'', password:''}}
            validationSchema={phoneLogin ? loginByPhoneSchema : loginByEmailSchema}
            onSubmit={async (values, { setSubmitting }) => {
                const { user, session, error } = await supabase.auth.signIn(
                    phoneLogin ? ({
                        phone: values.username,
                        password: values.password
                    })
                    :
                    ({
                        email: values.username,
                        password: values.password,
                    })
                )
                console.log(user)
                if(error) {
                    alert(error.message)
                } else {
                    alert('Successfully loggedIn')
                }
            }}
            >
                {({ errors, touched, isValid }) => (
                    <> 
                        <Form >
                            <div className="flex flex-col items-center">
                                <div className="flex h-16 flex-col items-start mb-2"> 
                                    <label>{phoneLogin ? 'Phone Number' : 'Email'}</label>
                                    <Field 
                                    name='username'
                                    placeholder={`Enter ${phoneLogin ? 'Phone Number' : 'Email'}`}
                                    />
                                    {(errors.username && touched.username) && <p className="text-xs">{ errors.username }</p>}
                                </div>
                                <div className="flex h-16 flex-col items-start mb-2">
                                    <label>Password</label>
                                    <Field
                                    name='password'
                                    type='password' 
                                    placeholder='Enter password'                        
                                    />
                                    {errors.password && touched.password && <p className="text-xs">{ errors.password }</p>}
                                </div>
                                <Link to='/forgotpassword'>forgot password</Link>
                                <button 
                                    type='submit' 
                                >
                                    login
                                </button>  
                                <div>Do not have an account? <button 
                                    onClick={() => {
                                        navigate('/signup')
                                    }}
                                >signup</button></div>
                            </div>
                        </Form>  
                    </>
                )}
            </Formik>
        </div>
      </div>
    )
}

export default Login