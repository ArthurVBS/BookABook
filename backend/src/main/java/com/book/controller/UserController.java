package com.book.controller;

import com.book.dto.UserDTO;
import com.book.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

  @Autowired
  private UserServiceImpl service;

  @GetMapping(value = "/{id}")
  public UserDTO getById(@PathVariable Long id){
    return service.getById(id);
  }

  @GetMapping(value = "/registration/{registration}")
  public UserDTO getByRegistration(@PathVariable String registration){
    return service.getByRegistration(registration);
  }

  @GetMapping(value = "/name/{name}")
  public UserDTO getByName(@PathVariable String name){
    return service.getByName(name);
  }

}
