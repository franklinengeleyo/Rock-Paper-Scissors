import { useState } from "react"

function ShoppingList() {

    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState('')

    function addItem() {
        if (newItem.trim() === "") return;
        setItems([...items, newItem])
        setNewItem('')
    }

    return (
        <div>
            <h2>Baking Ingredients List</h2>
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="Type an ingredient" />

            <button onClick={addItem}>Add Item</button>

            <ul>
                {items.map((item, index) =>
                    <li key={index}>{item}</li>
                )}
            </ul>
        </div>
    )
}

export default ShoppingList