package com.book.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Set;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tb_user")
public class User implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false, length = 150, unique = true)
  private String registration;

  @Column(nullable = false, length = 150, unique = true)
  private String name;

  @Column(nullable = false, length = 32)
  private String password;

  @Column(nullable = false, length = 30)
  private String access;

  @OneToMany(mappedBy = "user")
  private Set<Appointment> appointment;

}
