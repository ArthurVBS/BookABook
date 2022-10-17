package com.book.service.impl;

import com.book.dto.BookDTO;
import com.book.entity.Book;
import com.book.exception.AlreadyExistsException;
import com.book.exception.NotFoundException;
import com.book.repository.BookRepository;
import com.book.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;

@Service
public class BookServiceImpl implements IBookService {

  @Autowired
  private BookRepository repository;

  @Override
  public BookDTO create(BookDTO bookDTO) {
    try {
      Book book = new Book();
      book.setName(bookDTO.getName());
      book.setAuthor(bookDTO.getAuthor());
      book.setYear(bookDTO.getYear());
      Book result = repository.save(book);

      return new BookDTO(result);
    } catch (Exception err){
      throw new AlreadyExistsException();
    }
  }

  @Override
  public BookDTO getById(Long id) {
    if(repository.findById(id).isEmpty()){
      throw new NotFoundException();
    }

    Book result = repository.findById(id).get();
    return new BookDTO(result);
  }

  @Override
  public BookDTO getByAuthorAndName(String author, String name) {
    if(Objects.equals(author, "") || Objects.equals(name, "")){
      throw new NotFoundException();
    }

    Book result = repository.findByAuthorAndName(author, name);

    if (result == null){
      throw new NotFoundException();
    }

    return new BookDTO(result);
  }
}
