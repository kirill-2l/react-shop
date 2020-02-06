import React from "react";
import { Card, Icon, Image, Button } from "semantic-ui-react";

const BookCard = ({ title, author, price, image, addToCart }) => {
  return (
    <Card>
      <Image src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{title}</Card.Header>
        <Card.Meta>
          <span className="date">{author}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <span>
          <Icon name="rub" />
          {price}
        </span>
      </Card.Content>
      <Button onClick={addToCart}>Добавить в корзину</Button>
    </Card>
  );
};

export default BookCard;
