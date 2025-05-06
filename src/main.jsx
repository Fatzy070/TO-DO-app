import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import Todo from './form/todo.jsx'
// import Mtodo from './retodo'
import Newlist from './LIST'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Todo/> */}
    {/* <Mtodo /> */}
    <Newlist />
  </StrictMode>,
)
