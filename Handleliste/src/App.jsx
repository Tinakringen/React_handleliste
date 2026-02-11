import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddForm from './components/AddForm'
import ShoppingList from './components/ShoppingList'

function App() {

  const shoppingItem = [
    {
    id: 0,
    wareName: "Sopp",
    quantity: 5,
    bought: false
    },
    {
    id: 1,
    wareName: "Egg",
    quantity: 1,
    bought: true
    }
  ]

  const [form, setForm] = useState({shoppingItem})
  const [itemware, setShoppingList] = useState(shoppingItem)

  return (
    <main>
      <h1>Handleliste</h1>
      <AddForm form={form} setForm={setForm}/>
      <ShoppingList items={itemware} setShoppingList={setShoppingList} />
    </main>
  )
}

export default App
