package com.api.crud.service;

import com.api.crud.dto.StudentDTO;
import com.api.crud.model.Student;
import com.api.crud.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.core.convert.support.DefaultConversionService;

import java.util.List;
import java.util.Objects;
import java.util.regex.Pattern;

@Service
public class StudentServiceImpl implements StudentService {

    private final DefaultConversionService converter;


    private final StudentRepository studentRepository;
    @Autowired
    public StudentServiceImpl(DefaultConversionService converter,
                              StudentRepository studentRepository) {
        this.converter = converter;
        this.studentRepository = studentRepository;
    }

    private boolean isValidEmail(String email) {
        String emailRegex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$";
        return Pattern.compile(emailRegex).matcher(email).matches();
    }
    @Override
    public HttpStatus createStudent(StudentDTO student) {
        if (!isValidEmail(student.getEmail())) {
            return HttpStatus.BAD_REQUEST;
        }
        Student s = studentRepository.save(Objects.requireNonNull(this.converter.convert(student, Student.class)));
        converter.convert(s, StudentDTO.class);
        return HttpStatus.CREATED;
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student getStudentById(Integer id) {
        return studentRepository.findById(id)
                .orElse(null);
    }

    @Override
    public HttpStatus updateStudent(Integer id, StudentDTO student) {
        Student st = studentRepository.findById(id)
                .orElse(null);
        if (!isValidEmail(student.getEmail())) {
            return HttpStatus.BAD_REQUEST;
        }
        if (st != null) {
            st.setDni(student.getDni());
            st.setFullName(student.getFullName());
            st.setPhoneNumber(student.getPhoneNumber());
            st.setEmail(student.getEmail());
            studentRepository.save(st);
            return HttpStatus.OK;
        } else {
            return HttpStatus.NOT_FOUND;
        }
    }

    @Override
    public HttpStatus deleteStudent(Integer id){
        Student st = studentRepository.findById(id)
                .orElse(null);
        if (st != null) {
            studentRepository.delete(st);
            return HttpStatus.OK;
        } else {
            return HttpStatus.NOT_FOUND;
        }
    }
}
