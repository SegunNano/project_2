import { useState } from "react";
import { v4 as uuid } from "uuid";
import './Todo.css';
const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const handleSubmit = () => {
        if (input) {
            setTodos((todos) =>
                todos = [...todos, { text: input, id: uuid() }]
            );
            setInput('');
        }
    };
    const removeTodo = (id) => {
        setTodos((todos) => todos.filter((t) => t.id !== id));
    };
    return (
        <>
            <div className="container">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="New Todo" />
                <button onClick={handleSubmit}>Submit</button>
                <ul className="todos_list">
                    {
                        todos.map(({ text, id }) => {
                            return <li onDoubleClick={() => removeTodo(id)} key={id} className="todo">
                                <span>{ }</span>
                                <span>{text}</span>
                            </li>;
                        })
                    }
                </ul>
            </div>
        </>
    );
};

export default Todo;
