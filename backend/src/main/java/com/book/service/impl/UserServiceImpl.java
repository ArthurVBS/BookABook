package com.book.service.impl;

import com.book.dto.AppointmentDTO;
import com.book.dto.BookDTO;
import com.book.dto.UserDTO;
import com.book.entity.Appointment;
import com.book.entity.Book;
import com.book.entity.User;
import com.book.exception.AlreadyExistsException;
import com.book.exception.NotFoundException;
import com.book.repository.AppointmentRepository;
import com.book.repository.BookRepository;
import com.book.repository.UserRepository;
import com.book.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class UserServiceImpl implements IUserService {

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private AppointmentRepository appointmentRepository;

  @Autowired
  private BookRepository bookRepository;

  @Override
  public void create(UserDTO userDTO) {
    try {
      User user = new User();
      user.setRegistration(userDTO.getRegistration());
      user.setName(userDTO.getName());
      user.setPassword(userDTO.getPassword());
      user.setAccess(userDTO.getAccess());
      userRepository.save(user);

    } catch (Exception err) {
      throw new AlreadyExistsException();
    }
  }

  @Override
  public UserDTO getById(Long id) {
    if(userRepository.findById(id).isEmpty()){
      throw new NotFoundException();
    }

    User result = userRepository.findById(id).get();
    return new UserDTO(result);
  }

  @Override
  public UserDTO getByRegistration(String registration) {
    if(Objects.equals(registration, "")){
      throw new NotFoundException();
    }

    User result = userRepository.findByRegistration(registration);
    return new UserDTO(result);
  }

  @Override
  public UserDTO getByName(String name) {
    if(Objects.equals(name, "")){
      throw new NotFoundException();
    }

    User result = userRepository.findByName(name);
    return new UserDTO(result);
  }

  @Override
  public UserDTO getByRegistrationAndPassword(String registration, String password) {
    if(Objects.equals(registration, "") || Objects.equals(password, "") ){
      throw new NotFoundException();
    }

    User result = userRepository.findByRegistrationAndPassword(registration, password);
    return new UserDTO(result);
  }

  @Override
  public List<BookDTO> getBooksByUserId(Long user_id) {
    List<Appointment> appointments = appointmentRepository.findByUserId(user_id);
    List<Book> books = new ArrayList<>();
    List<BookDTO> toReturn = new ArrayList<>();

    appointments.forEach(appointment -> {
      Book book = bookRepository.findById(appointment.getBook().getId()).get();
      books.add(book);
    });

    books.forEach(book -> {
      toReturn.add(new BookDTO(book));
    });

    return toReturn;
  }
}
