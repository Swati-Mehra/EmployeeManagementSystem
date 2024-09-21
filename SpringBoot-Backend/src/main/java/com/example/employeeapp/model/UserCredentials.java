package com.example.employeeapp.model;

public class UserCredentials {
    private String userName;
    private String userPass;

    public UserCredentials() {
    }

    public UserCredentials(String userName, String userPass) {
        this.userName = userName;
        this.userPass = userPass;
    }

    // Getters and setters for the fields

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserPass() {
        return userPass;
    }

    public void setUserPass(String userPass) {
        this.userPass = userPass;
    }
}
