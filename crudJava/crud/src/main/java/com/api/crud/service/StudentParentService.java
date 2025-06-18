package com.api.crud.service;

import com.api.crud.dto.StudentParentDTO;
import org.springframework.http.HttpStatus;

public interface StudentParentService {

    HttpStatus createStudentParent(StudentParentDTO studentParent);
}
