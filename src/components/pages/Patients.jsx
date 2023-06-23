import React, { useEffect, useState } from "react"
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const Patients = () => {

  const [patients, setPatients] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1/hospital/patients/routes.php", {method: "GET"});
    const data = await response.json();
    setPatients(data);
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div style={{ marginLeft: '240px' }}>
      <h1>List of Admitted Patients</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Patient Number</TableCell>
              <TableCell>Admitted On</TableCell>
              <TableCell>Condition</TableCell>
              <TableCell>Advance Payment</TableCell>
              <TableCell>Mode Payment</TableCell>
              <TableCell>Room Number</TableCell>
              <TableCell>Doc No</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {patients.map((patient) => (
              <TableRow key={patient.pat_no}>
                <TableCell>{patient.pat_no}</TableCell>
                <TableCell>{patient.admtd_on}</TableCell>
                <TableCell>{patient.cond_on}</TableCell>
                <TableCell>{patient.adv_pymt}</TableCell>
                <TableCell>{patient.mode_pymt}</TableCell>
                <TableCell>{patient.room_no}</TableCell>
                <TableCell>{patient.doc_no}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Patients;
