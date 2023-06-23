import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const Analytics = () => {
  const [formData, setFormData] = useState({});
  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (e, field) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData((prevSubmittedData) => [...prevSubmittedData, formData]);
    setFormData({});
  };

  return (
    <Container maxWidth="sm" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <Typography variant="h4" component="h2" sx={{ mt: 2 }}>
          Discharge
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Patient Number"
            fullWidth
            id="pat_no"
            placeholder="Patient Number"
            value={formData.pat_no || ''}
            onChange={(e) => handleInputChange(e, 'pat_no')}
            sx={{ mt: 3 }}
          />
          <TextField
            label="Discount On"
            fullWidth
            id="dis_on"
            placeholder="Discount On"
            value={formData.dis_on || ''}
            onChange={(e) => handleInputChange(e, 'dis_on')}
            sx={{ mt: 3 }}
          />
          <TextField
            label="Payment Given"
            fullWidth
            id="pymt_gv"
            placeholder="Payment Given"
            value={formData.pymt_gv || ''}
            onChange={(e) => handleInputChange(e, 'pymt_gv')}
            sx={{ mt: 3 }}
          />
          <TextField
            label="Mode of Payment"
            fullWidth
            id="mode_of_pymt"
            placeholder="Mode of Payment"
            value={formData.mode_of_pymt || ''}
            onChange={(e) => handleInputChange(e, 'mode_of_pymt')}
            sx={{ mt: 3 }}
          />
          <TextField
            label="Transaction Given"
            fullWidth
            id="tr_gvn"
            placeholder="Transaction Given"
            value={formData.tr_gvn || ''}
            onChange={(e) => handleInputChange(e, 'tr_gvn')}
            sx={{ mt: 3 }}
          />
          <TextField
            label="Transaction Advised"
            fullWidth
            id="tr_advs"
            placeholder="Transaction Advised"
            value={formData.tr_advs || ''}
            onChange={(e) => handleInputChange(e, 'tr_advs')}
            sx={{ mt: 3 }}
          />
          <TextField
            label="Medicine"
            fullWidth
            id="medicine"
            placeholder="Medicine"
            value={formData.medicine || ''}
            onChange={(e) => handleInputChange(e, 'medicine')}
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
                  <TableCell>Patient Number</TableCell>
                  <TableCell>Discount On</TableCell>
                  <TableCell>Payment Given</TableCell>
                  <TableCell>Mode of Payment</TableCell>
                  <TableCell>Transaction Given</TableCell>
                  <TableCell>Transaction Advised</TableCell>
                  <TableCell>Medicine</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {submittedData.map((data, index) => (
                  <TableRow key={index}>
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

export default Analytics;
