INSERT INTO tb_book (name, author, genre, year) VALUES ('Anne of Green Gables', 'Lucy Maud Montgomery', 'Children`s literature', 1908);
INSERT INTO tb_book (name, author, genre, year) VALUES ('Anne of Avonlea', 'Lucy Maud Montgomery', 'Children`s literature', 1909);

INSERT INTO tb_user (registration, name, access) VALUES ('lib20222bbd', 'Brenda Bezerra Diaz', 'Librarian');
INSERT INTO tb_user (registration, name, access) VALUES ('2022st2pec', 'Pedro Eduardo Costa', 'Student');
INSERT INTO tb_user (registration, name, access) VALUES ('2022st2abs', 'Arthur Bezerra Silva', 'Student');

INSERT INTO tb_appointment (user_id, book_id, starts_at, ends_at) VALUES (2, 1, '2022-10-20', '2022-10-27');
INSERT INTO tb_appointment (user_id, book_id, starts_at, ends_at) VALUES (2, 2, '2022-09-27', '2022-10-04');
INSERT INTO tb_appointment (user_id, book_id, starts_at, ends_at) VALUES (3, 1, '2022-10-05', '2022-10-12');
INSERT INTO tb_appointment (user_id, book_id, starts_at, ends_at) VALUES (3, 2, '2022-08-10', '2022-08-17');
