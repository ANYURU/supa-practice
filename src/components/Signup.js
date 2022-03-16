import React from 'react'
import { Form, Field, Formik } from 'formik'
import * as yup from 'yup'
import supabase from './helpers/supabase/supabase'
import { Link } from 'react-router-dom'

const SIGN_UP_SCHEMA =  yup.object.shape({
    phoneNumber: yup.string().matches('/^[0-9]{10}$/gm', 'Invalid phone number').required('Phone number is required.'),
})

const Signup = () => {
    const [submitting, setSubmitting] = React.useState(false)

  return (
    <Formik
        validationSchema={SIGN_UP_SCHEMA}
        initialValues={{phoneNumber:''}}
        onSubmit={ async (values) => {
            const { user, session, error } = await supabase.auth.signUp({
                phone: values.phoneNumber
            })
            console.log(user)
            console.log(session)
            console.log(error)
        }}
    >
        {({
            touched,
            errors,
            isValid
        }) => (
            <Form>
                <div class="flex flex-col items-center">
                    <div class="flex h-16 flex-col items-start mb-2"> 
                        <label >Username</label>
                        <Field 
                        name='phoneNumber'
                        type='tel'
                        placeholder='0772519722'
                        />
                        {(errors.username && touched.username) && <p class="text-xs">{ errors.username }</p>}
                    </div>
                    <div class="h-12">
                        <p>Resend OPT!</p>
                        <Link>Want to change number</Link>
                    </div>
                    <button>Verify</button>
                </div>
            </Form>
        )}
    </Formik>
  )
}

export default Signup