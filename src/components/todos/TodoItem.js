import React from 'react';

function TodoItem({todo, dispatch}) {
  return(


    <div class="row pt-2 ">

      <div class= "col-lg-1 col-md-1  text-center bg-info">
        <input class="form-check-input" type="checkbox" onChange={() => dispatch({ type: 'flip', payload: {id : todo.id} })} />
      </div>

      <div class= "col-lg-4 col-md-3 text-center bg-dark">
        <span class="text-light" style={{ textDecoration: todo.complete ? 'line-through' : 'none'}}>{todo.text}</span>
      </div>

      <div class= "col-lg-4 col-md-3  ">
        <button class="btn btn-danger"  onClick={() => dispatch({ type: 'delete', payload: {id : todo.id}})}><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/> </svg></button>
      </div>
    </div>
  );
}

export default TodoItem;
