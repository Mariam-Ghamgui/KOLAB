import React, { useState } from 'react';
import './App.css';
import { FaCheck, FaPlusCircle, FaTrash } from 'react-icons/fa';

function TaskManagementApp() {
  const [todos, setTodos] = useState([]);
  const [inprogress, setInprogress] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim() !== '') {
      const todo = {
        id: Math.floor(Math.random() * 1000),
        text: input,
      };
      setTodos([todo, ...todos]);
      setInput('');
    }
  };

  const addToProgress = (id) => {
    const item = todos.find((x) => x.id === id);
    setInprogress([item, ...inprogress]);
    const filterArray = todos.filter((x) => x.id !== id);
    setTodos(filterArray);
  };

  const deleteTodo = (id) => {
    const filterArray = todos.filter((x) => x.id !== id);
    setTodos(filterArray);
  };

  const addToCompleted = (id) => {
    const item = inprogress.find((x) => x.id === id);
    setCompleted([item, ...completed]);
    const filterArray = inprogress.filter((x) => x.id !== id);
    setInprogress(filterArray);
  };

  return (
    <div className="App">
      <br />
      <div className="container">
        <h3 className="title">Tasks</h3>
        <form className="form_todo">
          <input
            type="text"
            className="form-control"
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Your Task"
            value={input}
          />
          <button type="button" className="btn" onClick={addTodo}>
            <FaPlusCircle className="icon" />
          </button>
        </form>
        <div className="todos_wrapper">
          <div className="todos_list">
            <h3 className="todo_title">To Do</h3>
            {todos.map((item, index) => (
              <div className="todo_card" key={item.id}>
                <p className="card_text">{item.text}</p>
                <FaCheck
                  onClick={() => addToProgress(item.id)}
                  className="icon-check-todo"
                />
                <FaTrash
                  onClick={() => deleteTodo(item.id)}
                  className="icon-trash-todo"
                />
              </div>
            ))}
          </div>
          <div className="todos_list">
            <h3 className="todo_title">In Progress</h3>
            {inprogress.map((item, index) => (
              <div className="progress_card" key={item.id}>
                <p className="card_text">{item.text}</p>
                <FaCheck
                  onClick={() => addToCompleted(item.id)}
                  className="icon-progress-todo"
                />
              </div>
            ))}
          </div>
          <div className="todos_list">
            <h3 className="todo_title">Completed</h3>
            {completed.map((item, index) => (
              <div className="completed_card" key={item.id}>
                <p className="card_text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskManagementApp;
