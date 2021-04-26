import React, {useState} from 'react';
import { Box, Button, Card, CardContent, FormGroup, TextField, Typography } from '@material-ui/core';
import {Form, Formik, useField} from 'formik';
import {object, string } from 'yup';
import Container from "@material-ui/core/Container";
import * as axios from "axios";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Alert from "@material-ui/lab/Alert";
import {useDispatch, useSelector} from "react-redux";
import {authFail} from "../redux/actions/auth";

const MyTextField = ({placeholder, ...props}) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return (
      <TextField
          placeholder={placeholder}
          {...field}
          helperText={errorText}
          error={!!errorText}
      />
  )
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    marginBottom: '25px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
}));

const initialValues = {
  surname: '',
  name: '',
  lastName: '',
  phone: '',
  address: '',
  inn: ''
};

function UserForm (props) {
  const [show, setShow] = useState(false)
  const dispatch = useDispatch()
  const classes = useStyles();
  const phoneRegExp = RegExp(
      /^\+?1?[6-9]\d{11,13}$/

  );
  const submit = ({surname, name, lastName, phone, address, inn}, { setSubmitting, resetForm }) => {
    axios.post(`http://127.0.0.1:8000/api/user/create/`, {surname, name, lastName, phone, address, inn})
        .then(res => {
          resetForm({})
          setShow(true)
          return res.data
        })
        .catch(error => {
          dispatch(authFail(error))
        })
    setSubmitting(false)
  }
  let errorMessage = null
  const error = useSelector(state => state.auth.error)
  if (error) {
    errorMessage = (
        <div style={{marginBottom: '20px', textAlign: 'center'}}>
          <p style={{color: 'red'}}>{error.message}</p>
        </div>
    );
  }
  return (
      <Box marginTop={5} marginBottom={4}>
        {show ?
            <div className={classes.root}>
              <Alert onClose={() => setShow(false)}>
                <strong>Congrats!</strong> You have successfully registered</Alert>
            </div>
            : null}
        <h1 style={{textAlign: 'center', color: 'white', marginBottom: '10px'}}>Registration form</h1>
        {errorMessage}
        <Container maxWidth="md">
          <Card>
            <CardContent>
              <Formik
                  validateOnChange={true}
                  validationSchema={
                    object({
                      surname: string().required(),
                      name: string().required(),
                      lastName: string().required(),
                      phone: string().required().matches(phoneRegExp, 'Phone number is not valid'),
                      address: string().required(),
                      inn: string().required(),
                    })
                  }
                  initialValues={initialValues} onSubmit={submit}>
                {({ values, errors, isSubmitting, isValidating }) => (
                    <Form autoComplete='off'>
                      <Box marginBottom={2} marginTop={2}>
                        <FormGroup>
                          <MyTextField placeholder='Surname' name="surname" type='input' label="Surname" />
                        </FormGroup>
                      </Box>

                      <Box marginBottom={2}>
                        <FormGroup>
                          <MyTextField placeholder='Name' name="name" type='input' label="Name" />
                        </FormGroup>
                      </Box>

                      <Box marginBottom={2}>

                        <FormGroup>
                          <MyTextField placeholder='Last name' name="lastName" type='input' label="Last name" />
                        </FormGroup>
                      </Box>

                      <Box marginBottom={2}>
                        <FormGroup>
                          <MyTextField placeholder='Phone (example: +996555224422)' name="phone" type='input' label="Phone" />
                        </FormGroup>
                      </Box>

                      <Box marginBottom={2}>
                        <FormGroup>
                          <MyTextField placeholder='Address' name="address" type='input' label="Address" />
                        </FormGroup>
                      </Box>

                      <Box marginBottom={2}>
                        <FormGroup>
                          <MyTextField placeholder='Inn' name="inn" type='input' label="Inn" />
                        </FormGroup>
                      </Box>

                      <Button variant={"contained"} color={"primary"} type="submit" disabled={isSubmitting || isValidating}>Save</Button>
                    </Form>
                )}
              </Formik>
            </CardContent>
          </Card>
        </Container>
      </Box>

  );
}

export default UserForm