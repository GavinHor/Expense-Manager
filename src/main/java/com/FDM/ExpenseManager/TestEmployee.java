package com.FDM.ExpenseManager;

import java.util.Objects;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class TestEmployee {
	private @Id @GeneratedValue Long id;
	private String fname;
	private String lname;
	private String content;

	private TestEmployee() {}

	public TestEmployee(String fname, String lname, String content){
		this.fname=fname;
		this.lname=lname;
		this.content=content;
	}

	@Override
	public int hashCode() {
		return Objects.hash(this.id, this.fname, this.lname, this.content);
	}

	@Override
	public boolean equals(Object o){
		TestEmployee other;
		try{
			other = (TestEmployee) o;
		}
		catch(Exception e){
			return false;
		}
		if (this.id==other.id){
			return true;
		}
		return false;
	}

	public long getID(){
		return this.id;
	}

	public void setID(long id){
		this.id=id;
	}

	public String getName(){
		return (this.fname + " " + this.lname);
	}
	
	public String getContent(){
		return this.content;
	}

	public void setContent(String o){
		this.content=o;
	}
}
