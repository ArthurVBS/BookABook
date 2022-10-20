package com.book.controller;

import com.book.dto.AppointmentDTO;
import com.book.exception.AlreadyExistsException;
import com.book.exception.NotFoundException;
import com.book.service.impl.AppointmentServiceImpl;
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
@RequestMapping("/appointment")
public class AppointmentController {

  @Autowired
  private AppointmentServiceImpl service;

  @GetMapping(value = "/{id}")
  public AppointmentDTO getById(@PathVariable Long id){
   return service.getById(id);
  }

  @GetMapping(value = "/user_id/{user_id}")
  public List<AppointmentDTO> getByUserId(@PathVariable Long user_id){
    return service.getByUserId(user_id);
  }

  @GetMapping(value = "/book_id/{book_id}")
  public List<AppointmentDTO> getByBookId(@PathVariable Long book_id){
    return service.getByBookId(book_id);
  }

  @GetMapping(value = "")
  public AppointmentDTO getByUserIdAndBookId(@RequestParam Long user_id, @RequestParam Long book_id){
    return service.getByUserIdAndBookId(user_id, book_id);
  }

  @PostMapping
  @ResponseStatus(HttpStatus.CREATED)
  public ResponseEntity<String> create(@RequestBody AppointmentDTO appointmentDTO){
    service.create(appointmentDTO);
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

    error.put("Appointment", "Not found");

    return error;
  }

  @ResponseStatus(HttpStatus.NOT_ACCEPTABLE)
  @ExceptionHandler(AlreadyExistsException.class)
  public Map<String, String> handleAlreadyExistsException() {
    Map<String, String> error = new HashMap<>();

    error.put("Appointment", "Already exists");

    return error;
  }

}
