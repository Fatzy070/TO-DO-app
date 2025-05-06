import React, { useState } from 'react';
import Forms from './forms';
import Lists from './list';
function Todo() {
  const [tasks, setTasks] = useState([
    { text: 'Buy Groceries', completed: false},
    {text: 'Walk the Dog', comppleted: false}
  ]);

  const addTask = (text) => {
    if(text.trim()) {
      setTasks([...tasks, { text, completed: false}]);
    }
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
                <div style={{ padding: '2rem', maxWidth: '500px', margin: 'auto', fontFamily: 'Arial' }}>
      <h1>To-Do List</h1>
      <Forms onAdd={addTask} />
      <Lists tasks={tasks} onToggle={toggleTask} onRemove={removeTask} />
    </div>
  )
}

export default Todo;