import React, { useEffect } from "react";

import axios from "axios";

import Menu from "../containers/Menu";
import BookCard from "../containers/BookCard";
import Filter from "../containers/Filter";
import { Container } from "semantic-ui-react";
import { Card } from "semantic-ui-react";

const App = ({ books, isReady, setBooks, setFilter }) => {
  useEffect(() => {
    axios.get("/books.json").then(({ data }) => setBooks(data));
  }, []);
  return (
    <Container>
      <Menu />
      <Filter />
      <Card.Group itemsPerRow={4}>
        {!isReady
          ? "Загрузка..."
          : books.map((book, i) => <BookCard key={i} {...book} />)}
      </Card.Group>
    </Container>
  );
};

export default App;
