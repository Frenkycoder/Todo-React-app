import React from 'react';
import TodoListItem from '../todo-list-item';
import './todo-list.css';

// ми можемо зразу дістати значення todos з об'єкта, який пережається в якості аргумента функції

const TodoList = ({todos, onDeleted, onToggleImportant, onToggleDone}) => {
  //Ми створюємо новий масив елементів elements через ф-ю map 
 const elements = todos.map((item) => {
    const {id, ...itemsProp} = item;
    return (
      // реакт хоче, щоб в кожного елемента масива був унікальний ключ 
      <li key={id} className="list-group-item">
        <TodoListItem 
        {...itemsProp}
        // передаю в тодолістітем нове свойство- фу-ю
        onDeleted={() => onDeleted(id)}
        onToggleImportant={() => onToggleImportant(id)}
        onToggleDone={() => onToggleDone(id)}
        />
      </li>);
  });
 
  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;