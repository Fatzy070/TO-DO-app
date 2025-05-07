import { useState , useReducer , useEffect } from "react";
import './CSS/LIST.css'

let initialState = [];

let todoReducer = (state , action) => {
        switch (action.type) {
            case "ADD":
                return [...state , action.pay];
            case "DEL":
                return state.filter(del => del.id !== action.pay);
            default:
                return state;
        }
}

let Newlist = () => {
    const [state , dispatch] = useReducer(todoReducer , [] , () => {
        const saved = localStorage.getItem("myTodos");
        return saved ? JSON.parse(saved) : [];
    })
    const [title , setTitle] = useState ('')
    const [description , setDescription] = useState ('')
    const [summary , setSummary] = useState('')

   

        useEffect(() => {
            localStorage.setItem("myTodos" , JSON.stringify(state));
        },[state])

    let submit = (e) => {
        e.preventDefault()

        if (!title || !description || !summary) return;

        let NextTodo = {
            id: Date.now(),
            title,
            description,
            summary,
        }

        dispatch({type:'ADD' , pay:NextTodo})
        setTitle('')
        setDescription('')
        setSummary('')
    }

    return (
    <main>
            <h2>MY TO-DO APP</h2>
            <form onSubmit={submit} >
            <input type="text" name="hwebhB" placeholder="ENTER TITLE" value={title} onChange={(e) => setTitle(e.target.value)} />
            <br />
            <textarea name="heheh" placeholder="ENTER DESC......." value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            <br />
            <textarea name="hehejh" placeholder="ADD SUMMARY" value={summary} onChange={(e) => setSummary(e.target.value)}>

            </textarea>
            <div className="btn">
            <button type="submit"> ADD TO-DO</button>
            </div>
            </form>
            <ol>    
                {
                    state.map((todo) => (
                        <li key={todo.id}>
                            <strong>{todo.title}</strong>
                            <p><cite>{todo.description}</cite></p>
                            <s>{todo.summary}</s>``
                                <button onClick={(e) => { 
                            const confirmed = window.confirm('Are you sure you want to delete');
                            if (confirmed) {
                                dispatch({type:'DEL' ,pay:todo.id}) 
                            }
                            }}>&times;</button>
                          
                        </li>
                    ))
                }
            </ol>

    </main>
    )
}

export default Newlist