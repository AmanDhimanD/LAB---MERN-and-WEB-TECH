package edu.kiet.springfullexample;

public class Bike implements Vehicle{

	String name;
	String model;
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public void info() {
		
		System.out.println("Name = "+name+"\nModel ="+model);
		
	}
	
}
