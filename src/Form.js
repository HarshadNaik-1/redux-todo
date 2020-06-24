import React from "react";
import * as actionType from "./store//actions";
import { connect } from "react-redux";

const Form = ({ addTodo }) => {
  let input;

  return (
    <form onSubmit={() => addTodo(input)}>
      <input type="text" ref={(node) => (input = node)} />
      <button>Add todo</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (input) =>
      dispatch({ type: actionType.ADD_TODO, text: input.value }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
