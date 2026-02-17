import { useState } from 'react'
import './App.css'
import AddForm from './components/AddForm'
import ShoppingList from './components/ShoppingList'


function App() {

  const shoppingItems = [
    {
      id: 0,
      name: "Sopp",
      quantity: 5,
      bought: false
    },
    {
      id: 1,
      name: "Egg",
      quantity: 1,
      bought: true
    }
  ]

  const [items, setItems] = useState(shoppingItems)

  const addItem = (newItem) => {
    setItems((prev) => [newItem, ...prev])
  }

  return (
    <main>
      <section className='container'>
      <h1>Handleliste</h1>
      <AddForm onAdd={addItem} />
      <ShoppingList items={items} setItems={setItems} />
      </section>
    </main>
    )
}

export default App
