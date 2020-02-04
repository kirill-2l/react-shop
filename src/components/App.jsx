import React, { useEffect } from 'react';

import axios from 'axios';
import { setBooks } from '../actions/books';

import Menu from './Menu';
import BookCard from './BookCard';
import Filter from './Filter';
import { Container } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';

const App = ({ books, isReady }) => {
  useEffect(() => {
    const getBooks = async () => {
      let res = await axios.get('/books.json');
      setBooks(res.data);
    };
    getBooks();
  }, []);
  return (
    <Container>
      <Menu />
      <Filter />
      <Card.Group itemsPerRow={4}></Card.Group>
      {!isReady
        ? 'Загрузка...'
        : books.map((book, i) => <BookCard key={i} {...book} />)}
    </Container>
  );
};



export default App;
