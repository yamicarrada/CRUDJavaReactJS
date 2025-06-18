package com.api.crud.converter;

import com.api.crud.dto.StudentParentDTO;
import com.api.crud.model.StudentParent;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class StudentParentDTOtoStudentParent implements Converter<StudentParentDTO, StudentParent> {

    @Override
    public StudentParent convert(StudentParentDTO source) {
        StudentParent studentParent = new StudentParent();
        studentParent.setFullName(source.getFullName());
        studentParent.setContactPhoneNumber(source.getContactPhoneNumber());
        studentParent.setEmail(source.getEmail());
        return studentParent;
    }
}
