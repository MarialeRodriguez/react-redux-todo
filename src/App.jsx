import React from "react";
import { TodoList } from "./components/TodoList";
import { Todoroute } from "./router/Todorouter";
import { connect } from 'react-redux';
import { useTodos } from "./hooks/useTodos";

const App = ({ todos }) => {

  const { addStoredTodos } = useTodos();
  addStoredTodos();

  return (
    <div className="container mt-5 col-12 row-12">

      <div className="row">
        <div className="col">
    <Todoroute>
        <TodoList todoList={ todos }/>
    </Todoroute>
        </div>
      </div>

    </div>
  );
}

const mapStateToProps = state => {
  return {
    todos: state.items
  };
};

export default connect(mapStateToProps)(App);