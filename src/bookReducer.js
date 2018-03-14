const defaultState = {
  books: []
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case "ADD_GOD":
      console.log("BOOKS", action);
      return { books: action.payload.books };
      break;
    default:
      return state;
  }
}
