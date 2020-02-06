import React from "react";
import { Menu } from "semantic-ui-react";

const MenuComponent = ({totalPrice, count}) => {
  return (
    <Menu>
      <Menu.Item name="browse">Магазин книг</Menu.Item>

  <Menu.Item name="reviews">Итого: &nbsp; <b>{totalPrice}</b></Menu.Item>

  <Menu.Item name="upcomingEvents">Корзина &nbsp;(<b>{count}</b>)</Menu.Item>
    </Menu>
  );
};

export default MenuComponent;
