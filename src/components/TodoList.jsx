import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, updateTodo, deleteTodo } from "../redux/todoSlice";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleUpdate = (id, text) => {
    if (text.trim()) {
      dispatch(updateTodo({ id, text }));
    }
    setEditId(null);
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`todo-item ${todo.completed ? "completed" : ""}`}
          onClick={() => dispatch(toggleComplete(todo.id))}
        >
          {editId === todo.id ? (
            <input
              type="text"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={() => handleUpdate(todo.id, editText)}
              autoFocus
            />
          ) : (
            <span>{todo.text}</span>
          )}
          <div>
            {editId === todo.id ? null : (
              <>
                <button
                  onClick={(e) => { 
                    e.stopPropagation(); // Prevents marking complete when clicking edit
                    setEditId(todo.id); 
                    setEditText(todo.text); 
                  }}
                  aria-label="Edit todo"
                  className="edit-btn"
                >
                  ✏️
                </button>
                <button
                  onClick={(e) => { 
                    e.stopPropagation(); // Prevents marking complete when clicking delete
                    dispatch(deleteTodo(todo.id)); 
                  }}
                  aria-label="Delete todo"
                  className="delete-btn"
                >
                  ❌
                </button>
              </>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
