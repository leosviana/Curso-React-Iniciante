import Titulo from "./Titulo" /* Importando o componente "Titulo.jsx" */

function App(){  
  return (
    <div> 
      <h1>Olá mundo!</h1>
      <Titulo amigo="Fulano" cor="red"/>
      <Titulo cor="blue"/>
      <Titulo cor="green" />
    </div>
  )
         
}

export default App