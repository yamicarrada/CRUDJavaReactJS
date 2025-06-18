package com.api.crud.service;

import com.api.crud.dto.StudentDTO;
import com.api.crud.model.Student;
import org.springframework.http.HttpStatus;

import java.util.List;

public interface StudentService {

    HttpStatus createStudent(StudentDTO student);
    List<Student> getAllStudents();
    Student getStudentById(Integer id);

    HttpStatus updateStudent(Integer id, StudentDTO student);

    HttpStatus deleteStudent(Integer id);
}
