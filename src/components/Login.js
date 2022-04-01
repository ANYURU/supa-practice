import supabase from './helpers/supabase/supabase';
import { Formik, Field, Form } from 'formik';
import * as yup from 'yup';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import logo from '../assets/media/images/logo.png'
import { useAuth } from './contexts/auth';

const loginByPhoneSchema = yup.object().shape({
    phone: yup.string().required('Phone Number is required!'),
    password: yup.string().min(6).required('Password is required')
})

 const Login = () => {
    const { user, setUser } = useAuth()
    const navigate = useNavigate()

    const signIn = async ( phone, password ) => {
        const { user, session, error } = await supabase.auth.signIn({
            phone: phone,
            password: password
        })
        return { user, session, error }
    }


    return user ?  <Navigate to='/home'/> : (
      <div className="flex justify-center items-center h-screen flex-col">
        <div className="mb-4 w-32 h-28 "><img src={logo} alt="Sacco application"/></div>
        <div className="shadow-lg w-3/12 h-2/5 flex flex-col justify-center rounded-md">
            <Formik
            initialValues={{phone:'', password:''}}
            validationSchema={ loginByPhoneSchema }
            onSubmit={async (values) => {
                const {user, error} = await signIn(values.phone, values.password)
                if (error) {
                    console.log(error)
                } else {
                    setUser(user)
                    navigate('/home')
                }
            }}
            >
                {({ errors, touched }) => (
                    <> 
                        <Form>
                            <div className="flex flex-col items-center">
                                <div className="flex h-16 flex-col items-start mb-2"> 
                                    <label>Phone Number</label>
                                    <Field 
                                    name='phone'
                                    placeholder='Enter phone number'
                                    />
                                    {(errors.phone && touched.phone) && <p className="text-xs">{ errors.phone }</p>}
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
                                <button className='w-60'
                                    type='submit' 
                                >
                                    login
                                </button>
                                <div className='flex justify-between'>
                                    <Link to='/forgotpassword'>forgot password</Link>
                                    <p>Do not have an account? <Link to='/signup'>signup</Link></p>
                                </div>
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