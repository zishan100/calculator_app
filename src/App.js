import React ,{ useState ,useEffect } from 'react';
import './index.css'
import Button from './Button/Button';
import Display from './Display/Display';

function App (){
    
    let  [ calculateVal , setCalculateVal  ] = useState('')
    let [result , setResult] = useState('');
  
    let inputBtn = [7,8,9,'+',4,5,6,'-',1,2,3,'*','C',0,'=','/'];
    
    useEffect(()=>{},[result]);

    const handleOnClick = (event)=>{

      const button = event.target.innerHTML;

      if(button === '='){
        calculator();  
      }else if( button ==='C' ){
        setCalculateVal('')
        setResult('');
      }else{
        setCalculateVal((prev)=>prev+button)
      }
      // console.log(calculateVal);
      // console.log(e," ","clicked");
      // console.log(e.target.innerHTML)
    }

    const calculator = ()=>{
      // console.log(calculateVal);

      let checkResult =calculateVal;

      try{
        setResult(eval(checkResult));      
      }catch(err){
        setResult('Error')

      }
    }
    
    
    return (
    <div className='main' >
      <h2>React Calculator</h2>
      {
        /*  
          Taking input tag to display user input value
          Calculated Result
          Defining UI of all button
        */
        
      }   
      <Display value={calculateVal} />
      
      {
        
        (<div>{result}</div>)
      }
      <div>
        
      </div>
      <div className='calculator-btn'  >
          {
            inputBtn.map((val,idx)=>{
              return (
                <Button key={idx} btn={val} clickEvent={handleOnClick} /> 
              )
            })    
          }
      </div> 
    </div>
    );
  
}

export default App;
