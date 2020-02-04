import React, { Component } from 'react'
import { Input, Menu } from 'semantic-ui-react'
import PropTypes from 'prop-types'


class Filter extends Component {
  state = { activeItem: 'All' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu secondary>
        <Menu.Item
          name='All'
          active={activeItem === 'All'}
          onClick={this.handleItemClick}
        >Все
        </Menu.Item>
        <Menu.Item
          name='Popular'
          active={activeItem === 'Popular'}
          onClick={this.handleItemClick}
        >Популярые
        </Menu.Item>
        <Menu.Item
          name='Price_high'
          active={activeItem === 'Price_high'}
          onClick={this.handleItemClick}
        >Цена (дешевые)
        </Menu.Item>
        <Menu.Item
          name='Price_low'
          active={activeItem === 'Price_low'}
          onClick={this.handleItemClick}
        >Цена (дорогие)
        </Menu.Item>
        <Menu.Item
          name='Author'
          active={activeItem === 'Author'}
          onClick={this.handleItemClick}
        >Автор
        </Menu.Item>
      </Menu>
    )
  }
}

export default Filter;
