package com.book.book.dto;

import com.book.book.entity.Librarian;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LibrarianDTO {

  private Long id;

  private String name;

  public LibrarianDTO(Librarian librarian){
    this.id = librarian.getId();
    this.name = librarian.getName();
  }
}
