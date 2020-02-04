import React from "react";
import { Menu } from "semantic-ui-react";

const MenuComponent = () => {
  return (
    <Menu>
      <Menu.Item name="browse">Магазин книг</Menu.Item>

      <Menu.Item name="reviews">Итого 0</Menu.Item>

      <Menu.Item name="upcomingEvents">Корзина</Menu.Item>
    </Menu>
  );
};

export default MenuComponent;
