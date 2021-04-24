import React from "react";
import {Formik, Form, ErrorMessage, Field} from "formik";
import * as Yup from "yup";
import Button from "@material-ui/core/Button";
import {TextField} from "@material-ui/core";
import './Login.css'
import {useDispatch, useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import {authLogin} from "../../redux/actions/auth";

const FormikField = ({ name, label, type = "text", required = false}) => {
  return (
      <div className="formikField">
        <Field
            required={required}
            autoComplete="off"
            as={TextField}
            label={label}
            name={name}
            fullWidth
            type={type}
            helperText={<ErrorMessage name={name} />}
        />
      </div>
  );
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
  const dispatch = useDispatch()
  const history = useHistory()
  const handleSubmit = (values) => {
    dispatch(authLogin(values.username, values.password))
    const token = localStorage.getItem('token');
    if (token) {
      history.push('/admin_page')
    }
  };

  return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <div className="login">
          <h1>Sign Up</h1>
          <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={SignupSchema}
          >
            {({ dirty, isValid }) => {
              return (
                  <Form>
                    <FormikField name="username" label="Name" required />
                    <FormikField name="password" type='password' label="Password" required />
                    <Button
                        variant="contained"
                        color="primary"
                        disabled={!dirty || !isValid}
                        type="submit"
                    >
                      Primary
                    </Button>
                  </Form>
              );
            }}
          </Formik>
        </div>
      </div>

  );
};

export default Login;