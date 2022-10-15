package com.book.book.controller;

import com.book.book.dto.LibrarianDTO;
import com.book.book.exception.AlreadyExistsException;
import com.book.book.exception.NotFoundException;
import com.book.book.service.LibrarianServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/librarian")
public class LibrarianController {

  @Autowired
  private LibrarianServiceImpl service;

  @GetMapping(value = "/{id}")
  public LibrarianDTO getById(@PathVariable Long id){
    return service.getById(id);
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public ResponseEntity<String> create(@RequestBody LibrarianDTO librarianDTO){
    service.create(librarianDTO);
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

    error.put("Librarian", "Not found");

    return error;
  }

  @ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
  @ExceptionHandler(AlreadyExistsException.class)
  public Map<String, String> handleAlreadyExistsException() {
    Map<String, String> error = new HashMap<>();

    error.put("Librarian", "Already exists");

    return error;
  }

}
