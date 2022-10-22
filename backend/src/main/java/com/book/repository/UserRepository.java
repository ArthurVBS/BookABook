package com.book.repository;

import com.book.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

  User findByRegistration(String registration);

  User findByName(String name);

  User findByRegistrationAndPassword(String registration, String password);

}
