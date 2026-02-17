import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({ items, setItems }) {

    return (
        <ul id="list">
            {items.map((item) => (
            <ShoppingItem key={item.id} id={item.id} name={item.name} quantity={item.quantity} bought={item.bought} setItems={setItems} />
            ))}
        </ul>
        )
}