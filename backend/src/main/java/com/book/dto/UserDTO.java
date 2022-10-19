package com.book.dto;

import com.book.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

  private Long id;

  private String registration;

  private String name;

  private String access;

  public UserDTO(User user){
    this.id = user.getId();
    this.registration = user.getRegistration();
    this.name = user.getName();
    this.access = user.getAccess();
  }

}
