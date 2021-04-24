import React from 'react';
import { Box, Button, Card, CardContent, FormGroup, TextField, Typography } from '@material-ui/core';
import {Form, Formik, useField} from 'formik';
import { number, object, string } from 'yup';
import Container from "@material-ui/core/Container";
import * as axios from "axios";

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

const submit = ({surname, name, lastName, phone, address, inn}, { setSubmitting, resetForm }) => {
   axios.post(`http://127.0.0.1:8000/api/user/create/`, {surname, name, lastName, phone, address, inn})
      .then(res => {
        resetForm({})
        console.log(res.data)
        return res.data
      })
  setSubmitting(false)
}

const initialValues = {
  surname: '',
  name: '',
  lastName: '',
  phone: '',
  address: '',
  inn: ''
};

function UserForm (props) {
  return (
      <Box marginTop={7} marginBottom={4}>
        <Container maxWidth="md">
          <Card>
            <CardContent>
              <Typography variant="h4">New User</Typography>

              <Formik
                  validateOnChange={true}
                  validationSchema={
                    object({
                      surname: string().required(),
                      name: string().required(),
                      lastName: string().required(),
                      phone: number().required(),
                      address: string().required(),
                      inn: string().required(),
                    })
                  }
                  initialValues={initialValues} onSubmit={submit}>
                {({ values, errors, isSubmitting, isValidating }) => (
                    <Form autoComplete='off'>
                      <Box marginBottom={2}>
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
                          <MyTextField placeholder='Phone' name="phone" type='input' label="Phone" />
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