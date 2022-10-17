package com.book.service;

import com.book.dto.LibrarianDTO;


public interface ILibrarianService {

  LibrarianDTO create (LibrarianDTO librarianDTO);

  LibrarianDTO getById (Long id);

}
