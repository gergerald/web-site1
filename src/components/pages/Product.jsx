import React, { useEffect, useState } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const ProductList = () => {
  const [roomData, setroomData] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('https://localhost/api.php')
      .then(response => response.json())
      .then(data => setroomData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div style={{ marginLeft: '240px' }}>
      <h1>List of Rooms</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>room_no</TableCell>
              <TableCell>room_type</TableCell>
              <TableCell>status</TableCell>
              <TableCell>chrg_per_day</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {roomData.map((room) => (
              <TableRow key={room.room_no}>
                <TableCell>{room.room_no}</TableCell>
                <TableCell>{room.room_type}</TableCell>
                <TableCell>{room.status}</TableCell>
                <TableCell>{room.chrge_per_day}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductList;
