import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { signIn } from "next-auth/react";

const LoginPage = () => {


    const handleLogin = (values, actions) => {
        actions.setSubmitting(true);


        setTimeout(() => {
            console.log('values', values)
            actions.setSubmitting(false);

        }, 500);


    }

    const handleValidate = values => {
        const errors = {}

        if (!values.userName) {
            errors.userName = "Kullanıcı Adı zorunludur.";
        }

        if (!values.password) {
            errors.password = "Şifre Zorunludur";
        }

        return errors
    }

    return (
        <main>
            <section>
                <div className='container'>


                    <div className="min-h-screen flex flex-col items-center justify-center">

                        <div className='flex justify-center mb-8'>
                            <h1 className='text-2xl font-bold'>
                                Login
                            </h1>
                        </div>
                        <button onClick={() => { signIn() }}>
                            Sign IN
                        </button>

                        <Formik
                            initialValues={{
                                "userName": '',
                                "password": '',
                            }}
                            onSubmit={handleLogin}
                            validate={handleValidate}
                            validateOnSubmit={true}
                            validateOnChange={true}
                            validateOnBlur={false}
                        >
                            {({ isSubmitting }) => (
                                <Form className='flex flex-col gap-y-4 max-w-xs w-full'>

                                    <Field name="userName" placeholder="Username" className="p-2 py-1.5 border outline-none" />
                                    <ErrorMessage name='userName' />
                                    <Field name="password" type="password" placeholder="Password" className="p-2 py-1.5 border outline-none" />
                                    <ErrorMessage name='password' />

                                    <button type='submit'>
                                        {
                                            isSubmitting ? "Giriş Yapılıyor..." : " Giriş Yap"
                                        }
                                    </button>
                                </Form>

                            )}
                        </Formik>
                    </div>

                </div>
            </section>
        </main>
    )
}

export default LoginPage