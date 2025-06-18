package com.api.crud.converter;

import com.api.crud.dto.StudentDTO;
import com.api.crud.model.Student;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class StudentToStudentDTOConverter implements Converter<Student, StudentDTO> {
    @Override
    public StudentDTO convert(Student source) {
        StudentDTO studentDTO = new StudentDTO();
        studentDTO.setDni(source.getDni());
        studentDTO.setFullName(source.getFullName());
        studentDTO.setPhoneNumber(source.getPhoneNumber());
        studentDTO.setEmail(source.getEmail());
        return studentDTO;
    }
}
