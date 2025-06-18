import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function StudentSeeModal({ open, onClose, student }) {
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
   
  
    return (
      <Dialog open={open} onClose={onClose}>
        <div  style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '20px',
        marginRight: '20px',
        }}>
      <h2>Student</h2>
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
            slotProps={{
                input: {
                  readOnly: true,
                  style: { color: '#000' },
                },
              }}
          />
          <TextField
            margin="dense"
            label="Full Name"
            style={{marginLeft: '20px'}}
            value={fullName}
            slotProps={{
                input: {
                  readOnly: true,
                  style: { color: '#000' },
                },
              }}
          />
          <TextField
            margin="dense"
            label="Phone Number"
            value={phoneNumber}     
            slotProps={{
                input: {
                  readOnly: true,
                  style: { color: '#000' },
                },
              }}       
          />
          <TextField
            margin="dense"
            label="Email"
            style={{marginLeft: '20px'}}
            value={email}
            slotProps={{
                input: {
                  readOnly: true,
                  style: { color: '#000' }, // Texto en negro
                },
              }}
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
            Cerrar
          </Button>          
        </DialogActions>
      </Dialog>
    );
  }