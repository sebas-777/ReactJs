import logo from './logo.svg';
import './App.css';
import Coche from './Components/Coche';
import Salario from './Components/Salario';


function App() {
  return (
    <div className="App">
     <Coche matricula="matri1" precio={ 1000}/>
     <Salario salario_total ={1000} impuesto={15}/>
    
    </div>
  );
}

export default App;
