import { NavBar } from './components/NavBar'
import { ItemListContainer } from './components/ItemListContainer'

function App() {

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={<div><strong>PLANTAS DE INTERIOR</strong> {"PARA VESTIR TODOS TUS AMBIENTES"}</div>}/>
    </>
  )
}

export default App
