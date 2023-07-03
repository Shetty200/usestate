
import  React,{ useState,useEffect } from 'react';

function App() {

  const [counter,Setcounter] = useState(0);
  const handleClick = ()=> Setcounter (counter +1);
  const [decrease,Setdecrease] = useState(0);
  const handleClick1 = ()=> Setdecrease (decrease -1);

  useEffect (()=> {
    console.log('inside the useffect');
  } );
  return (
  
    <>

   <button style={{textAlign:"center"}} onClick ={handleClick}>Click me</button>
   <button style={{textAlign:"center"}} onClick ={handleClick1}>Click me</button>
   <div style={{marginTop:'5px'}}>{counter}</div>
   <div style={{marginTop:'6px'}}>{decrease}</div>
</>
  );
}

export default App;
