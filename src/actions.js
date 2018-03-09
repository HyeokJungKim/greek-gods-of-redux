export function addGod(god){
  console.log("addGod", god)
  return {
    type: "ADD_GOD",
    payload: god
  }
}
