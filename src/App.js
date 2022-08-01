
import './App.css';
import Boton from './componentes/boton.jsx';
import Pantalla from './componentes/Pantalla.jsx';
import BotonClear from './componentes/BotonClear.jsx';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () =>{
    if(input){
      setInput(evaluate(input));
    }else{
      alert("Por favor ingre valors para realizar calculos")
    }
  };



  return (
    <div className="App">
      <h1 className='title'>Calculadora React</h1>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>%</Boton>
          <Boton manejarClic={agregarInput}>AC</Boton>
          <Boton manejarClic={agregarInput}>^</Boton>
          <BotonClear manejarClear={()=> setInput('')}>C</BotonClear>    
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>      
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton> 
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton> 
        </div>
        <div className='fila'>
         
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>/</Boton> 
          
        </div>
      

      </div>
    </div>
  );
}

export default App;
