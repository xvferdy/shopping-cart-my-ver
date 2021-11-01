// state -> array of objects = carts (detail about cart that was added)
// const carts = [
//   { id: 2, product: "Bloody Butterfly Zero Zero", price: 1000 },
//   { id: 1, product: "Barbie Puppy", price: 1000 },
//   { id: 3, product: "Cactus Omoa", price: 2000 },
// ];

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
