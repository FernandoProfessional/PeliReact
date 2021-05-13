import React, { useContext } from 'react'
import { Grid, Paper, Button, Typography } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useAxios } from '../../hooks/useAxios'
import { useHistory } from 'react-router'
import { AuthContext } from '../auth/AuthContext'


const LoginForm = ({handleClose}) => {


    const {dispatch} = useContext(AuthContext);

    const hadleLogin = (result) => {
        dispatch({
            type:'login',
            payload:result
        })
        history.replace('/home')
    }


    let history = useHistory()
    const{login} = useAxios()
    const paperStyle = { padding: '0 15px 40px 15px', width: 250, }
    const btnStyle = { marginTop: 10 }
    const passwordRegExp=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/
    const initialValues = {
        email: '',
        password: '',
    }
    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Enter valid email").required("Required"),
        password: Yup.string().min(8, "Minimum characters should be 8")
        .matches(passwordRegExp,"Password must have one upper, lower case, number.").required('Required'),
    })

    const onSubmit = async (values, props) => {

        let resultado = await login(values)
        if (resultado.status === 200) {
            // !Introducir la validacion aqui
            props.resetForm()
            handleClose()
            console.log('Resultado:',resultado.data )
            hadleLogin(resultado.data)
        }
        if (resultado.status === 204) {
            handleClose()
            props.resetForm()
            history.push('/index');
        }
    }
    return (
        <Grid>
            <Paper elevation={0} style={paperStyle}>
                <Grid align='center'>
                    <Typography variant='caption'>LOGIN</Typography>
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form noValidate>

                            <Field as={TextField} name='email' label='Email' fullWidth
                                error={props.errors.email && props.touched.email}
                                helperText={<ErrorMessage name='email' />} required />

                            <Field as={TextField} name='password' label='Password' type='password' fullWidth
                                error={props.errors.password && props.touched.password}
                                helperText={<ErrorMessage name='password' />} required />

                            <Button type='submit' style={btnStyle} variant='contained'
                                color='primary'>Login</Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default LoginForm;