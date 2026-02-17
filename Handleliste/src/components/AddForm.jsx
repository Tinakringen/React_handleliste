import { useState } from "react"

export default function AddForm({onAdd}){

    const [error, setError] = useState("")

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

        /// Fikk litt hjelp av den automatiske copilot her.
        if (!item.name || !item.quantity) {
            setError("Vennligst fyll inn både vare og antall.")
            return
        }
        
        setError("")
        
        onAdd({
            id: crypto.randomUUID(),
            name: item.name,
            quantity: Number(item.quantity),
            bought: false       
        })

        setItem({
            name: "",
            quantity: "",
        })    

    }

    return (
        <form className="shoppingform" onSubmit={handleClick}>
            <label htmlFor="ware">Vare</label>
            <input name="name" type="text" id="ware" placeholder="Sopp.." value={item.name} onChange={handleChange}/>
            <label htmlFor="itemquantity">Antall</label>
            <input name="quantity" type="number" id="itemquantity" min="1" placeholder="0" value={item.quantity} onChange={handleChange}/>
            <button>Legg til vare</button>
            {error && <p className="error">{error}</p>}
        </form>
    )
}