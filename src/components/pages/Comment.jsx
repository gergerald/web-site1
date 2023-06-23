import React, { useState, useEffect } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const Checkups = () => {
  const [checkupData, setCheckupData] = useState([]);

  useEffect(() => {
    // Fetch the data from the PHP server
    fetch('http://localhost/fetchCheckups.php')
      .then(response => response.json())
      .then(data => setCheckupData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div style={{ marginLeft: '240px' }}>
      <h1>On-going Checkups</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Doc No</TableCell>
              <TableCell>Pat No</TableCell>
              <TableCell>Diagnosis</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Treatment</TableCell>
              <TableCell>Checkup Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {checkupData.map((checkup) => (
              <TableRow key={checkup.doc_no}>
                <TableCell>{checkup.doc_no}</TableCell>
                <TableCell>{checkup.pat_no}</TableCell>
                <TableCell>{checkup.diagnosis}</TableCell>
                <TableCell>{checkup.status}</TableCell>
                <TableCell>{checkup.treatment}</TableCell>
                <TableCell>{checkup.checkup_date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Checkups;
