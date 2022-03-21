import {useState} from 'react'
import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'

const PASSWORD_RECOVERY_BY_EMAIL = yup.object().shape({
    phoneNumber: yup.string().required()
})

const PASSWORD_RECOVERY_BY_PHONE_NUMBER = yup.object().shape({
    email: yup.string().required('Email is required!'),
})

const ForgotPassword = () => {
    const [ phone, setPhone ] = useState(true)

    return (
        <Formik
        initialValues={{phoneNumber:''}}
        validationSchema={phone ? PASSWORD_RECOVERY_BY_PHONE_NUMBER : PASSWORD_RECOVERY_BY_EMAIL}
        onSubmit={(values) => {
            
        }}
        >
            {({touched, errors, isValid}) => (
                <Form>
                    {
                        phone ? (
                            <div class="flex flex-col items-center">
                                <div class="flex h-16 flex-col items-start mb-2"> 
                                    <label >Phone Number</label>
                                    <Field 
                                    name='phoneNumber'
                                    type='tel'
                                    placeholder='0772519722'
                                    />
                                    {(errors.phoneNumber && touched.phoneNumber) && <p class="text-xs">{ errors.phoneNumber }</p>}    
                                </div>
                                <div>
                                    <button type='submit'>Submit</button>
                                </div>
                            </div>
                        )
                        :
                        (
                            <div class="flex flex-col items-center">
                                <div class="flex h-16 flex-col items-start mb-2"> 
                                    <label >Email</label>
                                    <Field 
                                    name='email'
                                    type='email'
                                    placeholder='member@gmail.com'
                                    />
                                    {(errors.email && touched.email) && <p class="text-xs">{ errors.email }</p>}
                                </div>
                            </div>

                        )
                        
                    }


                </Form>
            )}

      </Formik>
    
  )
}

export default ForgotPassword