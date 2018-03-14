let defaultState = {
  greekGods: [
    {
      name: "Athena",
      power: "Wisdom",
      redux: "Store"
    }
  ]
};

export default function root(state = defaultState, action) {
  switch (action.type) {
    case "ADD_GOD":
      console.log("adding god reducer", action);
      return {
        greekGods: [...state.greekGods, action.payload.god]
      };
      break;
    case "DELETE_GOD":
      console.log("delete in reducer", action);
      let updatedGods = state.greekGods.filter(god => {
        return god.name !== action.payload.name;
      });

      return {
        greekGods: updatedGods
      };
    default:
      return state;
  }
}
