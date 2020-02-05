import React from "react";
import { Menu, Input } from "semantic-ui-react";
// import PropTypes from "prop-types";

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => {
  return (
    <Menu secondary>
      <Menu.Item
        active={filterBy === "all"}
        onClick={setFilter.bind(this, "all")}
      >
        Все
      </Menu.Item>
      <Menu.Item
        active={filterBy === "price_high"}
        onClick={setFilter.bind(this, "price_high")}
      >
        Цена (дешевые)
      </Menu.Item>
      <Menu.Item
        active={filterBy === "price_low"}
        onClick={setFilter.bind(this, "price_low")}
      >
        Цена (дорогие)
      </Menu.Item>
      <Menu.Item
        active={filterBy === "author"}
        onClick={setFilter.bind(this, "author")}
      >
        Автор
      </Menu.Item>
      <Menu.Item>
        <Input
          icon="search"
          onChange={e => setSearchQuery(e.target.value)}
          value={searchQuery}
          placeholder="Введите запрос..."
        />
      </Menu.Item>
    </Menu>
  );
};

export default Filter;
