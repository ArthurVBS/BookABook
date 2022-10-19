package com.book.service.impl;

import com.book.dto.BookDTO;
import com.book.entity.Book;
import com.book.exception.AlreadyExistsException;
import com.book.exception.NotFoundException;
import com.book.repository.BookRepository;
import com.book.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@Service
public class BookServiceImpl implements IBookService {

  @Autowired
  private BookRepository repository;

  @Override
  public void create(BookDTO bookDTO) {
    try {
      Book book = new Book();
      book.setName(bookDTO.getName());
      book.setAuthor(bookDTO.getAuthor());
      book.setGenre(bookDTO.getGenre());
      book.setYear(bookDTO.getYear());
      repository.save(book);

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
  public List<BookDTO> getAll() {
    List<Book> result = repository.findAll();
    List<BookDTO> toReturn = new ArrayList<>();

    result.forEach(myBook -> {
      toReturn.add(new BookDTO(myBook));
    });

    return toReturn;
  }

  @Override
  public BookDTO getByName(String name) {
    if(Objects.equals(name, "")){
      throw new NotFoundException();
    }

    Book result = repository.findByName(name);
    return new BookDTO(result);
  }

  @Override
  public List<BookDTO> getByAuthor(String author) {
    List<Book> result = repository.findByAuthor(author);
    List<BookDTO> toReturn = new ArrayList<>();

    result.forEach(myBook -> {
      toReturn.add(new BookDTO(myBook));
    });

    return toReturn;
  }

  @Override
  public List<BookDTO> getByGenre(String genre) {
    List<Book> result = repository.findByGenre(genre);
    List<BookDTO> toReturn = new ArrayList<>();

    result.forEach(myBook -> {
      toReturn.add(new BookDTO(myBook));
    });

    return toReturn;
  }

}
