package com.amitmisra.springboot.tutorial.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Data;

/**
 * Created by amitmisra on 5/5/17.
 */
@Data
@Entity
public class Employee {

    private @Id @GeneratedValue Long id;
    private String firstName;
    private String lastName;
    private String description;

    public Employee() {

    }

    public Employee(final String firstName, final String lastName, final String description) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.description = description;
    }
}
