package com.api.crud.converter;

import com.api.crud.dto.StudentDTO;
import com.api.crud.model.Student;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class StudentDTOToStudentConverter implements Converter<StudentDTO, Student> {
    @Override
    public Student convert(StudentDTO source) {
        Student student = new Student();
        student.setDni(source.getDni());
        student.setFullName(source.getFullName());
        student.setPhoneNumber(source.getPhoneNumber());
        student.setEmail(source.getEmail());
        return student;
    }
}
