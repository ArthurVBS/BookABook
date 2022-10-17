package com.book.service;

import com.book.dto.BookDTO;

import java.util.List;

public interface IBookService {

  BookDTO create (BookDTO bookDTO);

  BookDTO getById (Long id);

  BookDTO getByAuthorAndName (String author, String name);

}
