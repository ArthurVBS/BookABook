package com.book.controller;

import com.book.dto.BookDTO;
import com.book.exception.AlreadyExistsException;
import com.book.exception.NotFoundException;
import com.book.service.impl.BookServiceImpl;
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
@RequestMapping("/book")
public class BookController {

  @Autowired
  private BookServiceImpl service;

  @GetMapping(value = "/{id}")
  public BookDTO getById(@PathVariable Long id){
    return service.getById(id);
  }

  @GetMapping(value = "")
  public BookDTO getByAuthorAndName(
          @RequestParam(name = "author", defaultValue = "") String author,
          @RequestParam(name = "name", defaultValue = "") String name
  ){
    return service.getByAuthorAndName(author, name);
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public ResponseEntity<String> create (@RequestBody BookDTO bookDTO){
    service.create(bookDTO);
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

    error.put("Book", "Not found");

    return error;
  }

  @ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
  @ExceptionHandler(AlreadyExistsException.class)
  public Map<String, String> handleAlreadyExistsException() {
    Map<String, String> error = new HashMap<>();

    error.put("Book", "Already exists");

    return error;
  }

}
