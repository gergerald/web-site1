import React, { useEffect, useState } from "react"
import {  TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const Analytics = () => {
  const [patients, setPatients] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1/hospital/discharge/routes.php", {method: "GET"});
    const data = await response.json();
    setPatients(data);
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div style={{ marginLeft: '240px' }}>
      <h1>List of Discharged Patients</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Patient Number</TableCell>
              <TableCell>Dis On</TableCell>
              <TableCell>Payment Given</TableCell>
              <TableCell>Mode of Payment</TableCell>
              <TableCell>Treatment Given</TableCell>
              <TableCell>Treatment Advice</TableCell>
              <TableCell>Medicine</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.pat_no}>
                <TableCell>{patient.pat_no}</TableCell>
                <TableCell>{patient.dis_on}</TableCell>
                <TableCell>{patient.pymt_gv}</TableCell>
                <TableCell>{patient.mode_of_pymt}</TableCell>
                <TableCell>{patient.tr_gvn}</TableCell>
                <TableCell>{patient.tr_advs}</TableCell>
                <TableCell>{patient.medicine}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Analytics;
