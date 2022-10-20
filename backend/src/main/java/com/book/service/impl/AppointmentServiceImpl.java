package com.book.service.impl;

import com.book.dto.AppointmentDTO;
import com.book.entity.Appointment;
import com.book.exception.AlreadyExistsException;
import com.book.exception.NotFoundException;
import com.book.repository.AppointmentRepository;
import com.book.repository.BookRepository;
import com.book.repository.UserRepository;
import com.book.service.IAppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppointmentServiceImpl implements IAppointmentService {

  @Autowired
  private AppointmentRepository appointmentRepository;

  @Autowired
  private UserRepository userRepository;

  @Autowired
  private BookRepository bookRepository;

  @Override
  public void create(AppointmentDTO appointmentDTO) {
    if (userRepository.findById(appointmentDTO.getUser_id()).isEmpty()
        || bookRepository.findById(appointmentDTO.getBook_id()).isEmpty()
    ){
      throw new NotFoundException();
    }

    try {
      Appointment appointment = new Appointment();
      appointment.setId(appointmentDTO.getId());
      appointment.setUser(userRepository.findById(appointmentDTO.getUser_id()).get());
      appointment.setBook(bookRepository.findById(appointmentDTO.getBook_id()).get());
      appointment.setStartsAt(appointmentDTO.getStartsAt());
      appointment.setEndsAt(appointmentDTO.getEndsAt());

      appointmentRepository.save(appointment);
    } catch (Exception err){
      throw new AlreadyExistsException();
    }
  }

  @Override
  public AppointmentDTO getById(Long id) {
    if (appointmentRepository.findById(id).isEmpty()){
      throw new NotFoundException();
    }

    Appointment result = appointmentRepository.findById(id).get();
    return new AppointmentDTO(result);
  }

  @Override
  public AppointmentDTO getByUserIdAndBookId(Long user_id, Long book_id) {
    Appointment result = appointmentRepository.findByUserIdAndBookId(user_id, book_id);
    return new AppointmentDTO(result);
  }
}
