import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const About = () => {
  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (e, field) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the backend
      const response = await fetch('http://localhost/insertData.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Set the request Content-Type
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not OK');
      }

      const data = await response.json();

      if (data.success) {
        setSubmittedData((prevSubmittedData) => [...prevSubmittedData, formData]);
        setFormData({});
      }
    } catch (error) {
      console.error('An error occurred:', error);
      console.error('Error stack:', error.stack);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <Typography variant="h4" component="h2" sx={{ mt: 2 }}>
          Admission
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Pat No"
            fullWidth
            id="pat_no" // Update the id attribute to match your database column name
            placeholder="Pat No"
            value={formData.patNo || ''}
            onChange={(e) => handleInputChange(e, 'patNo')}
            sx={{ mt: 3 }}
          />

          <TextField
            label="Admitted On"
            fullWidth
            id="admtd_on"
            placeholder="Admitted On"
            value={formData.admtdOn || ''}
            onChange={(e) => handleInputChange(e, 'admtdOn')}
            sx={{ mt: 3 }}
          />
          <TextField
            label="Condition On"
            fullWidth
            id="cond_on"
            placeholder="Condition On"
            value={formData.condOn || ''}
            onChange={(e) => handleInputChange(e, 'condOn')}
            sx={{ mt: 3 }}
          />
          <TextField
            label="Advanced Payment"
            fullWidth
            id="adv_pymt"
            placeholder="Advanced Payment"
            value={formData.advPtmt || ''}
            onChange={(e) => handleInputChange(e, 'advPtmt')}
            sx={{ mt: 3 }}
          />
          <TextField
            label="Mode of Payment"
            fullWidth
            id="mode_pymt"
            placeholder="Mode of Payment"
            value={formData.modePymt || ''}
            onChange={(e) => handleInputChange(e, 'modePymt')}
            sx={{ mt: 3 }}
          />
          <TextField
            label="Room No"
            fullWidth
            id="room_no"
            placeholder="Room No"
            value={formData.roomNo || ''}
            onChange={(e) => handleInputChange(e, 'roomNo')}
            sx={{ mt: 3 }}
          />
          <TextField
            label="Doctor No"
            fullWidth
            id="doc_no"
            placeholder="Doctor No"
            value={formData.docNo || ''}
            onChange={(e) => handleInputChange(e, 'docNo')}
            sx={{ mt: 3 }}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 3 }}>
            Submit
          </Button>
        </form>

        {submittedData.length > 0 && (
          <div sx={{ mt: 4 }}>
            <Typography variant="h5" component="h3">
              Entered Values:
            </Typography>
            <Table sx={{ mt: 2 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Pat No</TableCell>
                  <TableCell>Admitted On</TableCell>
                  <TableCell>Condition On</TableCell>
                  <TableCell>Advanced Payment</TableCell>
                  <TableCell>Mode of Payment</TableCell>
                  <TableCell>Room No</TableCell>
                  <TableCell>Doctor No</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
  {submittedData.map((data) => (
    <TableRow key={data.pat_no}>
      <TableCell>{data.pat_no}</TableCell>
      <TableCell>{data.dis_on}</TableCell>
      <TableCell>{data.pymt_gv}</TableCell>
      <TableCell>{data.mode_of_pymt}</TableCell>
      <TableCell>{data.tr_gvn}</TableCell>
      <TableCell>{data.tr_advs}</TableCell>
      <TableCell>{data.medicine}</TableCell>
    </TableRow>
  ))}
</TableBody>

            </Table>
          </div>
        )}
      </div>
    </Container>
  );
};

export default About;
