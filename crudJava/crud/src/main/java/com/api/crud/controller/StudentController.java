package com.api.crud.controller;

import com.api.crud.dto.StudentDTO;
import com.api.crud.model.Student;
import com.api.crud.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "*")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @PostMapping("/addStudent")
    public ResponseEntity<?> addStudent(@RequestBody StudentDTO student) {
        return ResponseEntity.status(HttpStatus.OK).body(studentService.createStudent(student));
    }

    @GetMapping("/getAllStudents")
    public ResponseEntity<?> getAllStudents() {
        return ResponseEntity.status(HttpStatus.OK).body(studentService.getAllStudents());
    }

    @GetMapping("/getStudentById")
    public ResponseEntity<?> getStudentById(@RequestParam(value = "id") Integer id) {
        Student student = studentService.getStudentById(id);
        if (student != null) {
            return ResponseEntity.status(HttpStatus.OK).body(student);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student not found");
        }
    }

    @PutMapping("/updateStudent")
    public ResponseEntity<?> updateStudent(@RequestParam(value = "id") Integer id, @RequestBody StudentDTO student) {
        HttpStatus st = studentService.updateStudent(id, student);
        if (st != null) {
            return ResponseEntity.status(HttpStatus.OK).body("Student updated successfully");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student not found");
        }
    }

    @DeleteMapping("/deleteStudent")
    public ResponseEntity<?> deleteStudent (@RequestParam(value = "id") Integer id) {
        studentService.deleteStudent(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body("Student deleted successfully");
    }

}
