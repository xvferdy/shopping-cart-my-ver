// state => array of object = carts (detail about cart that was added)

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { ...action.product, quantity: 1 }];

    case "MOREQTY":
      return state.map((product) =>
        product.id === action.id && product.quantity < 10
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
    case "LESSQTY":
      return state.map((product) =>
        product.id === action.id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
    case "EDITQTY":
      return state.map((product) =>
        product.id === action.id
          ? { ...product, quantity: action.quantity }
          : product
      );
    case "REMOVE":
      return state.filter((product) => product.id !== action.id);

    default:
      return alert("KESALAHAN");
  }
};

export default reducer;
