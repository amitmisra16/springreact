package com.amitmisra.springboot.tutorial.repository;

import org.springframework.data.repository.CrudRepository;

import com.amitmisra.springboot.tutorial.model.Employee;

/**
 * Created by amitmisra on 5/5/17.
 */
public interface EmployeeRepository extends CrudRepository<Employee, Long> {

}
