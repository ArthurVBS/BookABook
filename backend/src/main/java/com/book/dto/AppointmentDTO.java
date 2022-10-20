package com.book.dto;

import com.book.entity.Appointment;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentDTO {

  private Long id;

  private Long user_id;

  private Long book_id;

  private LocalDate startsAt;

  private LocalDate endsAt;

  public AppointmentDTO(Appointment appointment){
    this.id = appointment.getId();
    this.user_id = appointment.getUser().getId();
    this.book_id = appointment.getBook().getId();
    this.startsAt = appointment.getStartsAt();
    this.endsAt = appointment.getEndsAt();
  }

}
