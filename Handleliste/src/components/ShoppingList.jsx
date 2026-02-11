import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({ items }) {

    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
        )
}