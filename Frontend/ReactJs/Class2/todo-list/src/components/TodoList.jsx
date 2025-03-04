import { useState } from "react";

const TodoList = ({ title, myStyles }) => {
    const [items, setItems] = useState(["Item1", "Item2", "Item3", "Item4", "Item5", "Item6", "Item7"]);
    const [newItem, setNewItem] = useState('');

    const handleAddTodo = (e) => {
        const newItems = [...items, newItem];
        setItems(newItems);
    };

    const handleChange = (e) => {
        setNewItem(e.target.value);
    };

    return (
        <div style={myStyles}>
            {newItem}
            <h1>{title ? title : 'Todo List'}</h1>
            <div style={{ display: 'flex'}}>
                <input type="text" placeholder="Enter new todo" onChange={handleChange} />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            <ul>
                {
                    items.map(item => (
                        <li>{item}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TodoList;

