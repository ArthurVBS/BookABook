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
@Table(name = "tb_book")
public class Book implements Serializable {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(nullable = false, length = 150, unique = true)
  private String name;

  @Column(nullable = false, length = 150)
  private String author;

  @Column(nullable = false, length = 150)
  private String genre;

  @Column(nullable = false)
  private Long year;

  @OneToMany(mappedBy = "book")
  private Set<Appointment> appointment;

}
