import React, { useState } from 'react';

function Forms({ onAdd }) {
  const [input, setInput] = useState(' ');

  const handleAdd = () => {
    onAdd(input);
    setInput(' ');
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        value={input}
        placeholder="Enter a task"
        onChange={(e) => setInput(e.target.value)}
        style={{ padding: '0.5rem', width: '70%' }}
      />
      <button onClick={handleAdd} style={{ padding: '0.5rem', marginLeft: '0.5rem' }}>
        Add
      </button>
    </div>
  );
}

export default Forms