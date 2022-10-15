package com.book.book.service;

import com.book.book.dto.LibrarianDTO;
import com.book.book.entity.Librarian;
import com.book.book.exception.AlreadyExistsException;
import com.book.book.exception.NotFoundException;
import com.book.book.repository.LibrarianRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LibrarianServiceImpl implements ILibrarianService {

  @Autowired
  private LibrarianRepository repository;

  @Override
  public LibrarianDTO create(LibrarianDTO librarianDTO) {
    try {
      Librarian librarian = new Librarian();
      librarian.setName(librarianDTO.getName());
      Librarian result = repository.save(librarian);

      return new LibrarianDTO(result);
    } catch (Exception err){
      throw new AlreadyExistsException();
    }
  }

  @Override
  public LibrarianDTO getById(Long id) {
    if (repository.findById(id).isEmpty()){
      throw new NotFoundException();
    }

    Librarian result = repository.findById(id).get();
    return new LibrarianDTO(result);
  }
}
