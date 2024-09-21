package com.example.employeeapp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "employee_details")

public class Employee {

    @Id
	@GeneratedValue(strategy =  GenerationType.IDENTITY)

    @Column(name = "emp_id")
	private long empId;
	
	@Column(name = "emp_name")
	private String empName;
	
	@Column(name = "emp_dept")
	private String empDept;
	
	@Column(name = "emp_salary")
	private double empSalary;

	public Employee(){

	}

	public Employee(long empId, String empName , String empDept , double empSalary)
	{

		super();
		this.empId=empId;
		this.empName=empName;
		this.empDept=empDept;
		this.empSalary=empSalary;

	}

	public long getEmpId() {
		return empId;
	}
	public void setEmpId(long empId) {
		this.empId = empId;
	}

    public String getEmpName() {
		return empName;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}

	public String getEmpDept() {
		return empDept;
	}
	public void setEmpDept(String empDept) {
		this.empDept = empDept;
	}

	public double getEmpSalary() {
		return empSalary;
	}
	public void setEmpSalary(double empSalary) {
		this.empSalary = empSalary;
	}

    
}
