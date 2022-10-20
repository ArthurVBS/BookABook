package com.book.service;

import com.book.dto.AppointmentDTO;

public interface IAppointmentService {

  void create (AppointmentDTO appointmentDTO);

  AppointmentDTO getById (Long id);

  AppointmentDTO getByUserIdAndBookId (Long user_id, Long book_id);

}
