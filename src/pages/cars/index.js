import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Layout from '../../components/layout'
import Checkbox from '@mui/material/Checkbox';


function createData(name, location, contact, IMEI) {
  return { name, location, contact, IMEI };
}

const rows = [
  createData('Ahmet', "istanbul", false, 24123),
  createData('Semih', "Ankara", true, 24123),
  createData('Özgür', "Adana", false, 24123),
  createData('işte', "İsparta", false, 24123),
  createData('Abdurrahman', "Amorium",true, 24123),
];

export default function index() {
  return (
    <Layout>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="left">Location</TableCell>
              <TableCell align="center">Contact</TableCell>
              <TableCell align="center">IMEI</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="left">{row.location}</TableCell>
                <TableCell align="center">
                <Checkbox disabled
                checked={row.contact}/></TableCell>
                <TableCell align="center">{row.IMEI}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer></Layout>
  );
}
