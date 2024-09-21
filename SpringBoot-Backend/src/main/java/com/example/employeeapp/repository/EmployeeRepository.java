package com.example.employeeapp.repository;

import com.example.employeeapp.model.Employee;
import org.springframework.data.repository.CrudRepository;


public interface EmployeeRepository extends CrudRepository<Employee,Long>{
    
}
