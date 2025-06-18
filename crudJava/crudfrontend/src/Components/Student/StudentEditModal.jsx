import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { updateStudent } from '../../Service/StudentService';

export default function StudentEditModal({ open, onClose, student, onSave }) {
  const [fullName, setName] = React.useState(student?.fullName || '');
  const [dni, setDNI] = React.useState(student?.dni || '');
  const [phoneNumber, setPhoneNumber] = React.useState(student?.phoneNumber || '');
  const [email, setEmail] = React.useState(student?.email || '');

  React.useEffect(() => {
    if (student) {
      setName(student.fullName);
      setDNI(student.dni);
      setPhoneNumber(student.phoneNumber);
      setEmail(student.email);
    }
  }, [student]);

  const handleSave = async () => {
    try {
      const updatedStudent = { dni, fullName, phoneNumber, email};
      await updateStudent(student.id, updatedStudent);
      onSave(); 
      onClose(); 
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <div  style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '20px',
        marginRight: '20px',
        }}>
      <h2>Edit Student</h2>
      <button 
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '20px',
            color: '#7c7777c4',
          }}
          onClick={onClose}>
          X
      </button>
      </div>
      <hr style={{ margin: '0', border: '1px solid #e0e0e0' }} />
      <DialogContent>
        <TextField
          margin="dense"
          label="DNI"
          value={dni}
          onChange={(e) => setDNI(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Full Name"
          style={{marginLeft: '20px'}}
          value={fullName}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Email"
          style={{marginLeft: '20px'}}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} 
        sx={{
          backgroundColor: '#bdbdbd',
          color: '#000',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#e0e0e0',
          },
        }}
        >
          Cancel
        </Button>
        <Button onClick={handleSave} 
        sx={{
          backgroundColor: '#2fb412', 
          color: '#fff',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#3f902e',
          },
        }}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}