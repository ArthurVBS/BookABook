package com.book.controller;

import com.book.dto.BookDTO;
import com.book.dto.UserDTO;
import com.book.exception.AlreadyExistsException;
import com.book.exception.NotFoundException;
import com.book.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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

  @GetMapping(value = "/books/{user_id}")
  public List<BookDTO> getBooksByUserId(@PathVariable Long user_id){
    return service.getBooksByUserId(user_id);
  }

  @GetMapping(value = "")
  public UserDTO getByRegistrationAndPassword(
          @RequestParam(name = "registration", defaultValue = "") String registration,
          @RequestParam(name = "password", defaultValue = "") String password
  ){
    return service.getByRegistrationAndPassword(registration, password);
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public ResponseEntity<String> create (@RequestBody UserDTO userDTO){
    service.create(userDTO);
    return ResponseEntity.ok("Created");
  }

  @ResponseStatus(HttpStatus.BAD_REQUEST)
  @ExceptionHandler(MethodArgumentNotValidException.class)
  public Map<String, String> handleValidationException(MethodArgumentNotValidException ex) {
    Map<String, String> errors = new HashMap<>();

    ex.getBindingResult().getAllErrors().forEach((err) -> {
      String fieldName = ((FieldError) err).getField();
      String errorMessage = err.getDefaultMessage();

      errors.put(fieldName, errorMessage);
    });

    return errors;
  }

  @ResponseStatus(HttpStatus.NOT_FOUND)
  @ExceptionHandler(NotFoundException.class)
  public Map<String, String> handleNotFoundException() {
    Map<String, String> error = new HashMap<>();

    error.put("User", "Not found");

    return error;
  }

  @ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
  @ExceptionHandler(AlreadyExistsException.class)
  public Map<String, String> handleAlreadyExistsException() {
    Map<String, String> error = new HashMap<>();

    error.put("User", "Already exists");

    return error;
  }

}
