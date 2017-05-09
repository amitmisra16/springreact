package com.amitmisra.springboot.tutorial.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by amitmisra on 5/5/17.
 */
@Controller
public class HomeController {

    /*
    Spring Boot's autoconfigured view resolver will map "index" to src/main/resources/templates/index.html
     */
    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }
}
