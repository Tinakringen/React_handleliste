import "../style/form.scss"
export default function AddForm({ShoppingItem, setShoppingList}){

    const handleChange = (e) => {
        const {name, value} = e.target

        setTodo((prev) => ({...prev, [name]: value}))

        console.log({[name]: value})
        console.log("Todo state:", todo)

    }

    const handleClick = (e) => {

        e.preventDefault()
        const uniqID = crypto.randomUUID()
        setShoppingList((prev) => [...prev, {id:uniqID, ...ShoppingItem}])
        console.log(ShoppingItem)

    }

    return (
        <form className="shoppingform" onSubmit={handleClick}>
            <label htmlFor="wareform">Vare</label>
            <input name="ware" type="text" id="ware" placeholder="Sopp.." onChange={handleChange}/>
            <label htmlFor="itemquantity">Antall</label>
            <input name="quantity" type="number" id="itemquantity" placeholder="1" onChange={handleChange}/>
            <button>Legg til vare</button>
        </form>
    )
}