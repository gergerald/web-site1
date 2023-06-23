import React, { useState, useEffect } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const ProductList = () => {
  const [departmentData, setDepartmentData] = useState([]);

  useEffect(() => {
    // Fetch the data from the PHP server
    fetch('http://localhost/fetchDepartments.php')
      .then(response => response.json())
      .then(data => setDepartmentData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="product-list-container">
      <h1>List of Departments</h1>
      <TableContainer className="table-container">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Department Name</TableCell>
              <TableCell>Department Location</TableCell>
              <TableCell>Facilities</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {departmentData.map((department) => (
              <TableRow key={department.dept_name}>
                <TableCell>{department.dept_name}</TableCell>
                <TableCell>{department.dept_location}</TableCell>
                <TableCell>{department.facilities}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductList;
