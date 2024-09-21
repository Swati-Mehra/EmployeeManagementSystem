package com.example.employeeapp.service;

import java.util.List;
import java.util.ArrayList;

import com.example.employeeapp.model.Employee;
import com.example.employeeapp.repository.EmployeeRepository;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

    @Autowired
        public EmployeeRepository employeeRepo;

    public List<Employee> getAllEmployes(){

        List<Employee> emplpoyes = new ArrayList<>();
        employeeRepo.findAll().forEach(emplpoyes::add);
        return emplpoyes;
    }

    public Employee getEmployeeById(Long id) {
        Optional<Employee> optionalEmployee = employeeRepo.findById(id);

        if (optionalEmployee.isPresent()) {
            return optionalEmployee.get();
        } else {
            // Handle the case where the employee with the given ID is not found
            throw new EmployeeNotFoundException("Employee not found with ID: " + id);
        }
    }

    public void addEmployee(Employee employee) {
        employeeRepo.save(employee);
    }

    public void updateEmployee(Long id, Employee employee) {
        employeeRepo.save(employee);
    }

    public void deleteEmployee(Long id) {
        employeeRepo.deleteById(id);
    }
    
}
