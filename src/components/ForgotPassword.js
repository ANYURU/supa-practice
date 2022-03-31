import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'

const PASSWORD_RECOVERY_BY_PHONE_NUMBER = yup.object().shape({
    email: yup.string().required('Email is required!'),
})

const ForgotPassword = () => {

    return (
        <Formik
        initialValues={{phoneNumber:''}}
        validationSchema={ PASSWORD_RECOVERY_BY_PHONE_NUMBER }
        onSubmit={( values ) => {
            
        }}
        >
            {({ touched, errors }) => (
                <Form>
                    {
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
                    }
                </Form>
            )}
      </Formik>   
    )
}

export default ForgotPassword