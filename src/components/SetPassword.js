import React from 'react'
import { useOTP } from './contexts/otp'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import logo from '../assets/media/images/logo.png'
import supabase from '../components/helpers/supabase/supabase'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './contexts/auth'


const passwordValidationSchema = yup.object().shape({
    password: yup.string().min(6, 'Minimum 8 characters required!').required('Password is required!'),
    passwordConfirm: yup.string()
        .oneOf([yup.ref('password')], 'Password must be the same!')
        .required('Required!')
})

export default function SetPassword() {
    const { phone } = useOTP()
    const { setUser } = useAuth()
    const navigate = useNavigate()

    return (
        <div className='flex h-screen justify-center items-center flex-col'>
            <div className='mb-4 w-32 h-28'><img src={logo} alt='Sacco'/></div>
            <div className='shadow-lg w-3/12 h-2/5 flex flex-col justify-center rounded-md'>
                <Formik
                initialValues={{password:'', passwordConfirm: ''}}
                validationSchema={passwordValidationSchema}
                onSubmit = {async ( values ) => {
                    !phone && navigate('/login')

                    const { user, session, error } = await supabase.auth.signUp(
                        {
                            phone: phone,
                            password: values.password,
                        }, 
                        { 
                            data: {
                                name:'',
                                email:'',
                                phoneNumber:'',
                                dob:'',
                                address:'',
                                gender:'',
                                id: '',
                                passportNumber:'',
                                employer:{
                                    name:'',
                                    address:'',
                                    position:'',
                                    workStation:'',
                                },
                                completed:false,
                                createdAt:'',
                                updatedAt:'',
                                createdBy:'',
                                updatedBy:'',
                                approvedBy:'',
                                accounts:{
                                    mwana:true,
                                    savings: true,
                                    fixedDeposit: false,
                                }
                            },
                        }
                    )

                    if(user) {
                        setUser(user)
                        navigate('/home')
                    } 

                    if(error) {
                        console.log(error)
                    }

                    console.log(session)

                

                    
                }}
                >
                    {({ errors, touched, values }) => (
                        <Form>
                            <div className="flex flex-col items-center">
                                <div className="flex h-16 flex-col items-start mb-2">
                                    <label htmlFor='password'>Password</label>
                                    <Field
                                    id='password'
                                    name='password'
                                    type='password' 
                                    placeholder='Enter password'
                                    value={values.password}                        
                                    />
                                    {errors.password && touched.password && <p className="text-xs">{ errors.password }</p>}
                                </div>
                                <div className="flex h-16 flex-col items-start mb-2">
                                    <label htmlFor='passwordConfirm'>Confirm password.</label>
                                    <Field
                                    id='passwordConfirm'
                                    name='passwordConfirm'
                                    type='password' 
                                    placeholder='Confirm Password' 
                                    value={values.passwordConfirm}                       
                                    />
                                    {errors.passwordConfirm && touched.passwordConfirm && <p className="text-xs">{ errors.passwordConfirm }</p>}
                                </div>
                                <button 
                                    type='submit' 
                                >
                                    Signup
                                </button>
                            </div>
                        </Form>
                    )}

                </Formik>
            </div>
        </div>
    )
}
