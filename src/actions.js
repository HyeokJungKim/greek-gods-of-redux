export function addGod(god) {
  console.log("addGod", god);
  return {
    type: "ADD_GOD",
    payload: { god: god, books: [1, 2, 3] }
  };
}

export function deleteGod(god) {
  console.log("deleteGod", god);
  return {
    type: "DELETE_GOD",
    payload: god
  };
}
