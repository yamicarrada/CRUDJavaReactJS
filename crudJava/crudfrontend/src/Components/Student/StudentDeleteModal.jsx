import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { deleteStudent } from '../../Service/StudentService';

export default function StudentDeleteModal({ open, onClose, student, onDelete }) {
  const handleDelete = async () => {
    try {
      await deleteStudent(student.id); // Llama al servicio para eliminar el estudiante
      onDelete(); // Actualiza la lista de estudiantes en el componente padre
      onClose(); // Cierra el modal
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Delete Student</DialogTitle>
      <hr style={{ margin: '0', border: '1px solid #e0e0e0' }} />
      <DialogContent>
        <p>Are you sure you want to delete the student "{student?.fullName}"?</p>
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
        <Button onClick={handleDelete} 
        sx={{
          backgroundColor: '#e83e3e',
          color: '#fff',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#b71c1c',
          },
        }}
        >
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  );
}