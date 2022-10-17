package com.book.dto;

import com.book.entity.Book;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookDTO {

  private Long id;

  private String name;

  private String author;

  private Long year;

  public BookDTO(Book book){
    this.id = book.getId();
    this.name = book.getName();
    this.author = book.getAuthor();
    this.year = book.getYear();
  }

}
