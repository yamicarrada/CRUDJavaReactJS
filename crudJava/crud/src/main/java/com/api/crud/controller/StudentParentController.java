package com.api.crud.controller;

import com.api.crud.service.StudentParentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/studentParent")
@CrossOrigin(origins = "*")
public class StudentParentController {
    @Autowired
    private StudentParentService studentParentService;

}
