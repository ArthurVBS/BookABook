package com.book.service;

import com.book.dto.UserDTO;

public interface IUserService {

  void create(UserDTO userDTO);

  UserDTO getById(Long id);

  UserDTO getByRegistration(String registration);

  UserDTO getByName(String name);

}
