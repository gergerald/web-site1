import React, { useState, useEffect } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const Dashboard = () => {
  const [doctorData, setDoctorData] = useState([]);

  useEffect(() => {
    // Fetch the data from the PHP server
    fetch('http://localhost/fetchDoctors.php')
      .then(response => response.json())
      .then(data => setDoctorData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div style={{ marginLeft: '240px' }}>
      <h1>Doctor's List</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Doc No</TableCell>
              <TableCell>Doc Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Qualification</TableCell>
              <TableCell>Address</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {doctorData.map((doctor) => (
              <TableRow key={doctor.doc_no}>
                <TableCell>{doctor.doc_no}</TableCell>
                <TableCell>{doctor.doc_name}</TableCell>
                <TableCell>{doctor.ph_no}</TableCell>
                <TableCell>{doctor.qualification}</TableCell>
                <TableCell>{doctor.address}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Dashboard;
