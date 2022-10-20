package com.book.repository;

import com.book.entity.Appointment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AppointmentRepository extends JpaRepository<Appointment, Long> {

  Appointment findByUserIdAndBookId(Long user_id, Long book_id);

  List<Appointment> findByUserId(Long user_id);

  List<Appointment> findByBookId(Long book_id);

}
