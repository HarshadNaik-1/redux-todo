import * as actionType from "./actions";
const initialState = {
  todos: [],
};
const todos = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_TODO:
      return {
        todos: [
          ...state.todos,
          {
            id: action.id,
            text: action.text,
          },
        ],
      };
    default:
      return state;
  }
};
export default todos;
