package com.book.service;

import com.book.dto.BookDTO;
import com.book.dto.UserDTO;

import java.util.List;


public interface IUserService {

  void create(UserDTO userDTO);

  UserDTO getById(Long id);

  UserDTO getByRegistration(String registration);

  UserDTO getByName(String name);

  UserDTO getByRegistrationAndPassword(String registration, String password);

  List<BookDTO> getBooksByUserId(Long user_id);

}
