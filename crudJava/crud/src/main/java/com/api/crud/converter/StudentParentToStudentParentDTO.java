package com.api.crud.converter;

import com.api.crud.dto.StudentParentDTO;
import com.api.crud.model.StudentParent;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class StudentParentToStudentParentDTO implements Converter<StudentParent, StudentParentDTO> {
    @Override
    public StudentParentDTO convert(StudentParent studentParent) {
        StudentParentDTO studentParentDTO = new StudentParentDTO();
        studentParentDTO.setFullName(studentParent.getFullName());
        studentParentDTO.setContactPhoneNumber(studentParent.getContactPhoneNumber());
        studentParentDTO.setEmail(studentParent.getEmail());
        return studentParentDTO;
    }
}
