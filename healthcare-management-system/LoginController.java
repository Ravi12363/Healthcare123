package com.healthcare.management.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @PostMapping("/login")
    public String login(@RequestBody User user) {
        // Example validation
        if ("test@example.com".equals(user.getEmail()) && "password123".equals(user.getPassword())) {
            return "Login successful!";
        } else {
            return "Invalid credentials!";
        }
    }
}

class User {
    private String email;
    private String password;

    // Getters and Setters
}
