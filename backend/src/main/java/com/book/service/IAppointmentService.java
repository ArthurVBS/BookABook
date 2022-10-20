package com.book.service;

import com.book.dto.AppointmentDTO;

import java.util.List;

public interface IAppointmentService {

  void create (AppointmentDTO appointmentDTO);

  AppointmentDTO getById (Long id);

  AppointmentDTO getByUserIdAndBookId (Long user_id, Long book_id);

  List<AppointmentDTO> getByUserId(Long user_id);

  List<AppointmentDTO> getByBookId(Long book_id);

}
