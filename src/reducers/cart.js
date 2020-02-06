const initialState = {
  items: [
    {
      "id": 0,
      "title": "Происхождение",
      "author": "Дэн Браун",
      "image": "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
      "price": 710,
      "rating": 3
    },
    {
      "id": 0,
      "title": "Происхождение",
      "author": "Дэн Браун",
      "image": "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
      "price": 710,
      "rating": 3
    },
    {
      "id": 0,
      "title": "Происхождение",
      "author": "Дэн Браун",
      "image": "https://cv9.litres.ru/pub/c/elektronnaya-kniga/cover_415/27624091-den-braun-proishozhdenie-27624091.jpg",
      "price": 710,
      "rating": 3
    },
  ]
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: [
           ...state.items,
          action.payload]
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter(o => o.id !== action.payload)
      };
    default:
      return state;
  }
};
