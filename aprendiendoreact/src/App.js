import logo from './logo.svg';
import './App.css';
import Coche from './Components/Coche';
import Salario from './Components/Salario';
import Caja from './Components/Caja';
import Empleado from './Components/Empleado';

function App() {
  return (
    <div className="App">
     <Coche matricula="matri1" precio={ 1000}/>
     <Salario salario_total ={1000} impuesto={15}/>
     <Caja/>
     <Empleado/>
    
    </div>
  );
}

export default App;
