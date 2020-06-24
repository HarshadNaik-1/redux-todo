import React from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

const TodoList = ({ todos }) => (
  <ul>
    {todos.map((todo) => (
      <Todo key={todo.id} text={todo.text} />
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(TodoList);
