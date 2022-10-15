package com.book.book.service;

import com.book.book.dto.LibrarianDTO;

import java.util.List;

public interface ILibrarianService {

  LibrarianDTO create (LibrarianDTO librarianDTO);

  LibrarianDTO getById (Long id);

}
