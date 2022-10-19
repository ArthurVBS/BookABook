package com.book.repository;

import com.book.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

  Book findByName(String name);

  List<Book> findByAuthor(String author);

  List<Book> findByGenre(String genre);

}
