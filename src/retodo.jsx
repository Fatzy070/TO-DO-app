import { useState , useReducer } from "react";

const initialState = [ ];

let todoReducer = (state , action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state , action.payload]
        case "REMOVE_TODO":
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state
    }
}
let Mtodo = () => {
    const [state , dispatch] = useReducer(todoReducer , initialState);
    const [title , setTitle] = useState('');
    const [description , setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title || !description) return ;

        const newTodo =  {
            id: Date.now(),
            title,
            description
        }
        dispatch({type:'ADD_TODO' , payload:newTodo})

        setTitle("");
        setDescription("");
    }

    return (
        <div>
            <h2>MY TO-DO APP</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <br />
                <textarea  placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <br />
                <button type="submit">Add Todo</button>
            </form>
            <ul>
                {
                    state.map((todo) => (
                        <li key={todo.id}>
                            <strong>{todo.title}</strong>
                            <p>{todo.description}</p>
                            <button onClick={() =>  dispatch({type:'REMOVE_TODO', payload:todo.id})}> DELETE</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}

export default Mtodo