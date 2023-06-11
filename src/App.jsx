import React from 'react'
import NavBar from './componentes/NavBar/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
const App = () => {

  return (
    < >
        <NavBar/>
        <ItemListContainer greeting={"Bienvenido a la mejor tienda de Streetwear"}/>
    </>
  )
}

export default App