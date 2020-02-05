import React, { useEffect } from "react";

import axios from "axios";

import Menu from "./Menu";
import BookCard from "./BookCard";
import Filter from "./Filter";
import { Container } from "semantic-ui-react";
import { Card } from "semantic-ui-react";

const App = ({ books, isReady, setBooks }) => {
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
