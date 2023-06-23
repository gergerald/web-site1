import React, { useEffect, useState } from "react"
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const ProductList = () => {
  // // Sample data for demonstration
  // const departmentData = [
  //   { dept_name: 'Cardiology', dept_location: 'Floor 2', facilities: 'MRI, CT Scan' },
  //   { dept_name: 'Pediatrics', dept_location: 'Floor 3', facilities: 'X-ray, Ultrasound' },
  //   // Add more department data here
  // ];

  const [rooms, setRooms] = useState([]);

  const fetchData = async () => {
    const response = await fetch("http://127.0.0.1/hospital/rooms/routes.php", {method: "GET"});
    const data = await response.json();
    setRooms(data);
  }

  useEffect(() => {
    fetchData()
  }, []);

  return (
    <div style={{ marginLeft: '240px' }}>
      <h1>List of Rooms</h1>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Room Number</TableCell>
              <TableCell>Room Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Charge Per Day</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms.map((room) => (
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
