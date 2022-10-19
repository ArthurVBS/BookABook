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

  private String privilege;

  public UserDTO(User user){
    this.id = user.getId();
    this.registration = user.getRegistration();
    this.name = user.getName();
    this.privilege = user.getPrivilege();
  }

}
