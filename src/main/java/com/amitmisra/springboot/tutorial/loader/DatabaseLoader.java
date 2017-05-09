package com.amitmisra.springboot.tutorial.loader;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.amitmisra.springboot.tutorial.model.Employee;
import com.amitmisra.springboot.tutorial.repository.EmployeeRepository;

/**
 * Created by amitmisra on 5/5/17.
 */
@Component
public class DatabaseLoader implements CommandLineRunner {

    private final EmployeeRepository employeeRepository;

    @Autowired
    public DatabaseLoader(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public void run(final String... args) throws Exception {
        employeeRepository.save(new Employee("Amit", "Misra", "spring react tutorial"));
    }
}
