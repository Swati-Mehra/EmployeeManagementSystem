package com.example.employeeapp.service;

import java.util.List;
import java.util.ArrayList;

import com.example.employeeapp.model.User;
import com.example.employeeapp.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    public UserRepository userRepo;

    public List<User> getAllUsers(){

        List<User> users = new ArrayList<>();
        userRepo.findAll().forEach(users::add);
        return users;
    }

    public User registerUser(User newUser) {
        // Check if a user with the same username or email already exists.
        User existingUser = userRepo.findByUserName(newUser.getUserName());

        if (existingUser != null) {
            // A user with the same username already exists, so registration fails.
            return null;
        }

        // You can add additional validation checks, such as password requirements, here.

        // Create a new user entity with the provided data.
        User userToRegister = new User();
        userToRegister.setUserName(newUser.getUserName());
        userToRegister.setUserRole(newUser.getUserRole());
        userToRegister.setUserEmail(newUser.getUserEmail());
        userToRegister.setUserPass(newUser.getUserPass());
        // You should hash and salt the password.

        // Save the new user to the database.
        User registeredUser = userRepo.save(userToRegister);

        // Return the registered user.
        return registeredUser;
    }


    public void addUser(User user) {
        userRepo.save(user);
    }

    public void updateUser(Long id, User user) {
        userRepo.save(user);
    }

    public void deleteUser(Long id) {
        userRepo.deleteById(id);
    }

    public User findByUsername(String userName) {
        return userRepo.findByUserName(userName);
    }
    
}
