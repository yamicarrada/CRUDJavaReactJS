import * as React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StudentEditModal from './StudentEditModal';
import StudentDeleteModal from './StudentDeleteModal.jsx';
import StudentSeeModal from './StudentSeeModal.jsx';


const columns = [
  { id: 'dni', label: 'DNI', minWidth: 170, align: 'center' },
  { id: 'fullName', label: 'Full Name', minWidth: 200, align: 'center' },
  { id: 'phoneNumber', label: 'Phone Number', minWidth: 200, align: 'center' },
  { id: 'email', label: 'Email', minWidth: 200, align: 'center' },
  { id: 'actions', label: 'Actions', minWidth: 50, align: 'center' },
];

export default function StudentTable({ students, onSave, onDelete }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [openSee, setOpenSee] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const [selectedStudent, setSelectedStudent] = React.useState(null);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleEdit = (student) => {
    setSelectedStudent(student);
    setOpenEdit(true);
  };

  const handleSeeStudent = (student) => {
    setSelectedStudent(student);
    setOpenSee(true);
  };

  const handleDelete = (student) => {
    setSelectedStudent(student);
    setOpenDelete(true);
  };


  const rows = students.map((student) => (
    {
      dni: student.dni,      
      fullName: student.fullName,
      phoneNumber: student.phoneNumber,
      email: student.email,      
      actions: (
        <>
        <IconButton color="black" onClick={() => handleSeeStudent(student)}>
            <VisibilityIcon />
          </IconButton>
          <IconButton color="primary" onClick={() => handleEdit(student)}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={() => handleDelete(student)}>
            <DeleteIcon />
          </IconButton>
        </>
      ),
    }
  ));

  return (
    <>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === 'number'
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <StudentEditModal
        open={openEdit}
        onClose={() => setOpenEdit(false)}
        student={selectedStudent}
        onSave={onSave}
      />
      <StudentDeleteModal
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        student={selectedStudent}
        onDelete={onDelete}
      />
      <StudentSeeModal
        open={openSee}
        onClose={() => setOpenSee(false)}
        student={selectedStudent}
      />
    </>
  );
}
