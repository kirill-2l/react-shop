import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import { setBooks } from "./actions/books";
import books from "./books.json";

import Menu from "./components/Menu";
import BookCard from ".//components/BookCard";
import { Container } from "semantic-ui-react";
import { Card } from "semantic-ui-react";

const App = ({ setBooks, isReady }) => {
  useEffect((setBooks) => {
    const getBooks = async () => {
      let res = await axios.get("books.json");
      return await res.data;
    };
    console.log(getBooks());
  }, []);
  return (
    <Container>
      <Menu />
      <Card.Group itemsPerRow={4}></Card.Group>
      {!isReady
        ? "Загрузка..."
        : books.map((book, i) => <BookCard key={i} {...book} />)}
    </Container>
  );
};

const mapStateToProps = ({ books }) => ({
  books: books.items,
  isReady: books.isReady
});

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
