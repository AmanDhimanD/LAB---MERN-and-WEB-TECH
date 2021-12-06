package edu.kiet.springfullexample;

import org.springframework.stereotype.Component;

@Component
public class Message {
	public void getMessage() {
		System.out.println("This is by Annotation Controller");
	}
		
}
