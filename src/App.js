import { useState } from 'react';
import Cabecera from './components/Cabecera';
import Listado from './components/Listado';

function App() {

  const [comprados, setComprados] = useState(0)

  const comprarProducto = () =>{
    setComprados(comprados + 1)
  }

  return (
    <div className="App">
      <Cabecera comprados={comprados}/>
      <Listado comprarProducto={comprarProducto}/>
    </div>
  );
}

export default App;
