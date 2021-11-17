import React, {useState, useReducer, Fragment} from 'react';
import TodoItem from './TodoItem'

import '../../styles/style.css';

function reducer(todos, action) {
  switch(action.type) {
    case 'add-todo':
      return [...todos, addTodo(action.payload.text)];
    case 'flip':
      return todos.map((todo) => {
        if(todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo;
      });
    case 'delete':
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      return todos;
  }
}

function addTodo(text) {
  return { id: Date.now(), text: text, complete: false };
}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    dispatch({ type: 'add-todo', payload: { text: text } });
    setText('');
  }

  // console.log(todos);

  return(

<div>


    <div class="container p-4 ">
      <h1 class="text-center">Simple TodoApp</h1>
      <form onSubmit={handleSubmit}>
        <input  placeholder="Todo List" class="form-control" type="text" value={text} onChange={(event) => setText(event.target.value)} />
        <div class="text-center">
        <button class="btn btn-dark my-3 text-center" type="Submit">Add Todo</button>
        </div>
      </form>

      {
        todos.map((todo) => {
          return <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
        })
      }
    </div>
</div>
  );
}

export default Todos;
