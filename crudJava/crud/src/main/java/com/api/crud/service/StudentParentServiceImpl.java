package com.api.crud.service;

import com.api.crud.dto.StudentParentDTO;
import com.api.crud.model.StudentParent;
import com.api.crud.repository.StudentParentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.convert.support.DefaultConversionService;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.regex.Pattern;

@Service
public class StudentParentServiceImpl implements StudentParentService{

    private final StudentParentRepository studentParentRepository;
    private final DefaultConversionService converter;

    @Autowired
    public StudentParentServiceImpl(StudentParentRepository studentParentRepository,
                                    DefaultConversionService converter) {
        this.studentParentRepository = studentParentRepository;
        this.converter = converter;
    }
    private boolean isValidEmail(String email) {
        String emailRegex = "^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+$";
        return Pattern.compile(emailRegex).matcher(email).matches();
    }

    @Override
    public HttpStatus createStudentParent(StudentParentDTO studentParentDTO){
        if(!isValidEmail(studentParentDTO.getEmail())) {
            return HttpStatus.BAD_REQUEST;
        }
        StudentParent studentParent = studentParentRepository.save(Objects.requireNonNull(this.converter.convert(studentParentDTO, StudentParent.class)));
        converter.convert(studentParent, StudentParentDTO.class);
        return HttpStatus.CREATED;
    }

}
