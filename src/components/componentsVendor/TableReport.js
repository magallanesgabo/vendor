import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(name, calories) {
  return { name, calories};
}

const rows = [
  createData('id:5', 1),
  createData('id:6', 0),
  createData('id:8', 0),
];


export default function AcccessibleTable() {
  return (
    <TableContainer>
      <Table sx={{ minWidth: 200 }} aria-label="caption table">
        <TableHead>
          <TableRow style={{fontWeigth: 'Large', fontHeigth: '40px' }}>
            <TableCell align="center">Item Sold</TableCell>
            <TableCell align="center">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow style={{ boxShadow: 'no', border: 'none' }} key={row.name}>
              <TableCell align="center" component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}