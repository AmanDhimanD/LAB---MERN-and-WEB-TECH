package edu.kiet.springfullexample;

import java.lang.annotation.Annotation;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
    	ApplicationContext context1= new AnnotationConfigApplicationContext(AnnotationConfig.class);
    	Message m1 =  context1.getBean(Message.class);
    	m1.getMessage();
    	ApplicationContext context=new ClassPathXmlApplicationContext("edu/kiet/springfullexample/config.xml");
//        Vehicle c = context.getBean("car",Car.class);
        Vehicle c = context.getBean(Car.class);
        c.info();
        Vehicle b = context.getBean("bike",Bike.class);
        b.info();
        Vehicle s = context.getBean("scooty",Scooty.class);
        s.info();
    }
}
