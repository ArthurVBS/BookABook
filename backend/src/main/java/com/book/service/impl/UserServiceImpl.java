package com.book.service.impl;

import com.book.dto.UserDTO;
import com.book.entity.User;
import com.book.exception.AlreadyExistsException;
import com.book.exception.NotFoundException;
import com.book.repository.UserRepository;
import com.book.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class UserServiceImpl implements IUserService {

  @Autowired
  private UserRepository repository;

  @Override
  public void create(UserDTO userDTO) {
    try {
      User user = new User();
      user.setRegistration(userDTO.getRegistration());
      user.setName(userDTO.getName());
      user.setAccess(userDTO.getAccess());
      repository.save(user);

    } catch (Exception err) {
      throw new AlreadyExistsException();
    }
  }

  @Override
  public UserDTO getById(Long id) {
    if(repository.findById(id).isEmpty()){
      throw new NotFoundException();
    }

    User result = repository.findById(id).get();
    return new UserDTO(result);
  }

  @Override
  public UserDTO getByRegistration(String registration) {
    if(Objects.equals(registration, "")){
      throw new NotFoundException();
    }

    User result = repository.findByRegistration(registration);
    return new UserDTO(result);
  }

  @Override
  public UserDTO getByName(String name) {
    if(Objects.equals(name, "")){
      throw new NotFoundException();
    }

    User result = repository.findByName(name);
    return new UserDTO(result);
  }
}
