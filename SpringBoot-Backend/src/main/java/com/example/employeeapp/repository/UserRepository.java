package com.example.employeeapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.employeeapp.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Define custom query methods if needed
    User findByUserName(String userName);
}
