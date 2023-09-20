import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import cookie from 'cookie';


const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["isLoggedIn"] ? true : false
}

//props imported from state
const Listings = (props) => {
  return (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Hours</TableCell>
                    <TableCell>Address</TableCell>
                    {/* ternary operator to display a delete icon if user is logged in */}
                    {checkAuth() ? <TableCell>Delete</TableCell> : null }
                </TableRow>
            </TableHead>
            <TableBody>
                {props.Listings.map((listings, idx) => {
                    return (
                        <TableRow key={`{listing.id}`}>

                        </TableRow>
                    )
                })}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default Listings