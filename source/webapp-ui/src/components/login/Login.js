import React from "react";
import {Formik, Form, ErrorMessage, Field, useField} from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import {TextField} from "@material-ui/core";
import './Login.css'
import {useDispatch, useSelector} from "react-redux";
import {authLogin} from "../../redux/actions/auth";
import { useHistory } from "react-router-dom";
import Spinner from "../Spinner";

const FormikField = ({fullWidth, required = false, label, type = 'text', ...props}) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
      <div className="formikField">
        <Field
            type={type}
            required={required}
            fullWidth
            as={TextField}
            label={label}
            {...field}
            helperText={errorText}
            error={!!errorText}
        />
      </div>
  )
};

const initialValues = {
  username: "",
  password: ""
};

const SignupSchema = Yup.object().shape({
  username: Yup.string()
      .min(4, "Too Short!")
      .required("Required"),
  password: Yup.string()
      .min(5, "Too Short!")
      .required("Required")
});

const Login = (props) => {
  const isAuthenticated = useSelector((state => state.auth.token !== null))
  const loading = useSelector(state => state.auth.loading)
  const history = useHistory()
  const dispatch = useDispatch()
  const handleSubmit = (values) => {
    dispatch(authLogin(values.username, values.password))
  };

  let errorMessage = null
  const error = useSelector(state => state.auth.error)
  if (error) {
    errorMessage = (
        <div style={{marginBottom: '20px', textAlign: 'center'}}>
          <p style={{color: 'red'}}>{error.message}</p>
        </div>
    );
    }

  if (isAuthenticated) {
    history.push('/admin_page')
  } else if (loading) {
    return <Spinner />
  }
    return (
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div className="login">
            <h1 style={{textAlign: 'center'}}>Sign In</h1>
            {errorMessage}
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={SignupSchema}
            >
              {({dirty, isValid}) => {
                return (
                    <Form>
                      <FormikField name="username" label="Name" required/>
                      <FormikField name="password" type='password' label="Password" required/>
                      <Button
                          variant="contained"
                          color="primary"
                          disabled={!dirty || !isValid}
                          type="submit"
                      >
                        Sign In
                      </Button>
                    </Form>
                );
              }}
            </Formik>
          </div>
        </div>
    )
}

export default Login;