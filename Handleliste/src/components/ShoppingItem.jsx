
export default function ShoppingItem({ id, name, quantity, bought, setItems }) {

    const handleBought = () => {
        /// Her var det den innebygde copilot som kom med forslag, som jeg tenkte jeg prøver ut, endret litt på den.
        setItems((prev) => prev.map((currentItem) => {
            if (currentItem.id === id) {
                return {...currentItem, bought: !currentItem.bought}
            }
            return currentItem
        }))
    }

    const handleQuantity = (e) => {
        const newQuantity = Number(e.target.value)

        setItems((prev) => prev.map((currentItem) =>
            currentItem.id === id ? {...currentItem, quantity: newQuantity < 1 ? 1 : newQuantity} 
            : currentItem
        ))
    }
    
    return (
        <li>
            <label>
                <input type="checkbox" checked={bought} onChange={handleBought}/>
                {name}
            </label>
            <label>
            <input type="number" min="1" value={quantity} onChange={handleQuantity} />
            </label>
        </li>
    )
}