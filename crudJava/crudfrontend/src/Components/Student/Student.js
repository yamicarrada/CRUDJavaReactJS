import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';
import { addStudent, getStudents } from '../../Service/StudentService';
import StudentTable from './StudentTable';


export default function Student() {
  const paperStyle = {
    padding: '50px 20px',
    width: 600,
    margin: '20px auto',
  }

  const [dni, setDNI] = useState('');
  const [fullName, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const [students, setStudents] = useState([]);

  const handleClick = async (e) => {
    e.preventDefault();
    const student = { dni, fullName, phoneNumber, email};
    try {
      await addStudent(student);
      setDNI('');
      setName('');
      setPhoneNumber('');
      setEmail('');
      const updatedStudents = await getStudents(); // Obtener la lista actualizada
      setStudents(updatedStudents); // Actualizar la lista de estudiantes
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const handleSave = async () => {
    try {
      const updatedStudents = await getStudents();
      setStudents(updatedStudents);
    } catch (error) {
      console.error("Error fetching updated students:", error);
    }
  };

  const handleDeleteConfirm = async () => {
    try {
      const updatedStudents = await getStudents(); // Obtén la lista actualizada
      handleSave(updatedStudents); // Actualiza la lista de estudiantes
    } catch (error) {
      console.error("Error updating students:", error);
    }
  };

  useEffect(() => {
    getStudents().then((data) => setStudents(data));
  }, []);

  return (
    <Container>
      <Paper elevation={0} style={paperStyle}>
        <h1 style={{ color: "#5191c0" }}>
          <u>Add Student</u>
        </h1>
        <Box
          component="form"
          sx={{ "& > :not(style)": { marginTop: "10px" } }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label=" DNI"
            variant="outlined"            
            value={dni}
            onChange={(e) => setDNI(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Full Name"
            variant="outlined"
            style={{ marginLeft: '20px' }}            
            value={fullName}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Phone Number"
            variant="outlined"            
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Email"
            variant="outlined"
            style={{ marginLeft: '20px' }}            
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Button variant="contained"
          color="success"
          style={{ marginTop: '20px' }}
          onClick={handleClick}
        >
          Submit
        </Button>
      </Paper>

      <Paper elevation={0} style={{ width: '100%', padding: '20px', marginTop: '20px' }}>
        <h1 style={{ color: "#5191c0", marginBottom: '20px' }}>
          Students List
        </h1>
        <StudentTable students={students} onSave={handleSave} onDelete={handleDeleteConfirm} style={{ marginTop: '20px' }} />
      </Paper>

    </Container>
  );
}