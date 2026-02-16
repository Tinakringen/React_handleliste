import { useState } from "react"
import "../style/form.scss"

export default function AddForm({onAdd}){

    const [item, setItem] = useState({
        name: "",
        quantity: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target

        setItem((prev) => ({...prev, [name]: value}))

    }

    const handleClick = (e) => {
        e.preventDefault()
        const newItem = crypto.randomUUID()
        setItem((prev) => ({...prev, id: newItem}))
        console.log(item)
        onAdd(item)

    }

    return (
        <form className="shoppingform" onSubmit={handleClick}>
            <label htmlFor="ware">Vare</label>
            <input name="name" type="text" id="ware" placeholder="Sopp.." value={item.name} onChange={handleChange}/>
            <label htmlFor="itemquantity">Antall</label>
            <input name="quantity" type="number" id="itemquantity" min="1" placeholder="1" value={item.quantity} onChange={handleChange}/>
            <button>Legg til vare</button>
        </form>
    )
}