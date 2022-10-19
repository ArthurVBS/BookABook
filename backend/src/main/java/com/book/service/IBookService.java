package com.book.service;

import com.book.dto.BookDTO;

import java.util.List;

public interface IBookService {

  BookDTO create (BookDTO bookDTO);

  BookDTO getById (Long id);

  List<BookDTO> getAll();

  BookDTO getByName(String name);

  List<BookDTO> getByAuthor(String author);

  List<BookDTO> getByGenre(String genre);

}
