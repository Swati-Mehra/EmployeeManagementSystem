package com.example.employeeapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "user_details",uniqueConstraints = @UniqueConstraint(columnNames = "user_email"))

public class User {
    @Id
	@GeneratedValue(strategy =  GenerationType.IDENTITY)

    @Column(name = "user_id")
	private long userId;
	
	@Column(name = "user_name")
	private String userName;
	
	@Column(name = "user_role")
	private String userRole;
	
	@Column(name = "user_email")
	private String userEmail;

	@Column(name = "user_password")
	private String userPass;

	//@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
	//@JoinTable(
			//name = "user_role",
			//joinColumns = @JoinColumn(
		    //        name = "user_id", referencedColumnName = "id"),
			//inverseJoinColumns = @JoinColumn(
			//	            name = "role_id", referencedColumnName = "id"))
	
	//private Collection<Role> roles;

	public User(){

	}

	public User(long userId,String userName,String userRole,String userEmail,String userPass){
		super();
		this.userId=userId;
		this.userName=userName;
		this.userRole=userRole;
		this.userEmail=userEmail;
		this.userPass=userPass;
	}

	public long getUserId(){
		return userId;
	}
	public void setUserId(long userId){
		this.userId=userId;
	}

	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserRole() {
		return userRole;
	}
	public void setUserRole(String userRole) {
		this.userRole = userRole;
	}

	public String getUserEmail(){
		return userEmail;
	}
	public void setUserEmail(String userEmail){
		this.userEmail=userEmail;
	}

	public String getUserPass(){
		return userPass;
	}
	public void setUserPass(String userPass){
		this.userPass=userPass;
	}

	//public Collection<Role> getRoles() {
	//	return roles;
	//}
	//public void setRoles(Collection<Role> roles) {
	//	this.roles = roles;
	//}

}