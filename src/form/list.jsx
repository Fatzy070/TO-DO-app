import React from 'react';

function List({ tasks, onToggle, onRemove }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {tasks.map((task, index) => (
        <li
          key={index}
          style={{
            margin: '0.5rem 0',
            textDecoration: task.completed ? 'line-through' : 'none'
          }}
        >
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => onToggle(index)}
          />
          <span style={{ marginLeft: '0.5rem' }}>{task.text}</span>
          <button
            onClick={() => onRemove(index)}
            style={{ marginLeft: '1rem', padding: '0.2rem 0.5rem' }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default List;