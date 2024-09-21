package com.example.employeeapp.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.employeeapp.model.User;
import com.example.employeeapp.model.UserCredentials;
import com.example.employeeapp.service.UserService;

@RestController
@RequestMapping("/auth")
@CrossOrigin
public class AuthController {    
    @Autowired
    UserService userService;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserCredentials userCredentials) {
        User user = userService.findByUsername(userCredentials.getUserName());

        if (user != null && user.getUserPass().equals(userCredentials.getUserPass())) {
            // Authentication successful
            return ResponseEntity.ok("Authentication successful");
        } else {
            // Authentication failed
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity<String> authenticateUser(@RequestBody UserCredentials userCredentials) {
    // Fetch the user by username from the database
    User user = userService.findByUsername(userCredentials.getUserName());

    // Check if the user exists and the provided password matches
    if (user != null && user.getUserPass().equals(userCredentials.getUserPass())) {
        // Authentication successful
        return ResponseEntity.ok("Authentication successful");
    } else {
        // Authentication failed
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
    }
    }


    @PostMapping("/signup")
    public ResponseEntity<User> signup(@RequestBody User newUser) {
        // Perform user signup logic and return a ResponseEntity with the newly created user.

        // You can assume you have a service or repository for user registration.
        // For example, if you have a service named userService, you can create a newUser method to register the user.
        User registeredUser = userService.registerUser(newUser);

        if (registeredUser != null) {
            // If signup is successful, return a ResponseEntity with the registered user.
            return ResponseEntity.ok(registeredUser);
        } else {
            // If signup fails, return an error response, e.g., 400 Bad Request.
            return ResponseEntity.badRequest().build();
        }
    } 
}
