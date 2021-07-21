// Include React library and component styles
import React from 'react';
import './app-header.css';

// we take data - props object let props = {toDo: ... , done: ...}
const AppHeader = ({toDo, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>
  );
};

export default AppHeader;