let defaultState = { greekGods: []}


export default function root(state=defaultState, action){
  switch (action.type){
    case "ADD_GOD":
      console.log("adding god reducer", action)
      return {
        greekGods: [...state.greekGods, action.payload]
      }
      break;
    default:
      return state
  }
}
