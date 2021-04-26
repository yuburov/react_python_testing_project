import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Box} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import * as axios from "axios";
import {useSelector} from "react-redux";
import { useHistory } from "react-router-dom";
import Spinner from "./Spinner";

const useStyles = makeStyles({
  table: {
    minWidth: 320,
  },
});

function Admin(props) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const isAuthenticated = useSelector((state => state.auth.token !== null))
  const history = useHistory()

  useEffect(() => {
    setLoading(true)
    axios.get(`http://127.0.0.1:8000/api/`, {
      headers: {
        "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem('token')}`
        }
    })
    .then(res => {
          setUsers(res.data)
          setLoading(false)
        })
  },[])

  const classes = useStyles();
  if (!isAuthenticated) {
    history.push('/login')
  } else if (loading) {
    return <Spinner />
  }
  return (
      <Box marginTop={5} marginBottom={4}>
        <Container maxWidth="md">
          <h1 style={{textAlign: 'center', color: 'white',  marginBottom: '10px'}}>List of users</h1>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Surname</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Last name</TableCell>
                  <TableCell align="right">Phone</TableCell>
                  <TableCell align="right">Address</TableCell>
                  <TableCell align="right">Inn</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user) => (
                    <TableRow key={user.name}>
                      <TableCell component="th" scope="row">
                        {user.surname}
                      </TableCell>
                      <TableCell align="right">{user.name}</TableCell>
                      <TableCell align="right">{user.lastName}</TableCell>
                      <TableCell align="right">{user.phone}</TableCell>
                      <TableCell align="right">{user.address}</TableCell>
                      <TableCell align="right">{user.inn}</TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </Box>
  );
}

export default Admin;

