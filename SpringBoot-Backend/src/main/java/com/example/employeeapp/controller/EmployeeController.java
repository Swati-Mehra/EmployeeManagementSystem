package com.example.employeeapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.example.employeeapp.model.Employee;
import com.example.employeeapp.service.EmployeeService;

@RestController
@RequestMapping("/api")
@CrossOrigin
@ResponseStatus(HttpStatus.CREATED)
public class EmployeeController {
    @Autowired
    private EmployeeService employeeService;

    @RequestMapping("/employes")
    public List<Employee> getAllEmployes(){
        return employeeService.getAllEmployes();
    }

    @RequestMapping(method = RequestMethod.GET, value = "/employes/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        Employee employee = employeeService.getEmployeeById(id);
        return ResponseEntity.ok(employee);
    }

    @RequestMapping(method = RequestMethod.POST,value = "/employes")
    public void addEmployee(@RequestBody Employee employee){
        employeeService.addEmployee(employee);
    }

    @RequestMapping(method = RequestMethod.PUT,value = "/employes/{id}")
    public void updateEmployee(@PathVariable Long id,@RequestBody Employee employee){
        employeeService.updateEmployee(id,employee);
    }

    @RequestMapping(method = RequestMethod.DELETE,value = "/employes/{id}")
    public void deleteEmployee(@PathVariable Long id){
        employeeService.deleteEmployee(id);
    }

    
}
