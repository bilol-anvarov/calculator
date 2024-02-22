import React, { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [inputValue, setInput] = useState('0');
  // добавляет пробелы чисто ради красоты 
  const inputValueSpace = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ').replace(/\*/g, '∙').replace(/\//g, '÷');

  function onchangeButtons(num){
    window.navigator.vibrate(100);
    




    let lastNum = inputValue.charAt(inputValue.length - 1)
    if(lastNum === '+' || lastNum === '-' ||  lastNum === '*' || lastNum === '.' || lastNum === '/' ){
      if(num === '+' || num === '-' || num === '*' || num === '.' || num === '/'){
        setInput(inputValue.slice(0,-1))
      }
    } else{
      setInput(inputValue)
    }



    setInput(checkNum =>{
      let answer
      if(num === '='){
        if(lastNum === '+'|| lastNum === '-' ||  lastNum === '*' || lastNum === '/'){
          answer = eval(inputValue.slice(0,-1))
        } else {
          answer = eval(inputValue);
        }
      } 


      if(answer){
        return String(answer)
      } else if(answer == 0){
        return '0'
      } else if(checkNum === '-' && num === '='){
        return '0'
      }else if(checkNum === '0'){
        if(num === '+' || num === '=' || num === '*' || num === '/'){
          return checkNum
        } else if (num === '.'){
          return '0.'
        } else {
          return String(num);
        }
      } else {
        const numArray = checkNum.split(/[+\-*\/]/);
        const newItem = numArray[numArray.length - 1].split('.').length ;
        if(num === '.'){
            if(newItem > 1){
              return checkNum
            }
        }
        return checkNum + num;
      }
    })


  }


  // ФУНКЦИЯ ДЛЯ ОЧИСТКИ
  function clear(){
    setInput('0')
  }
  function remove(){
    if(inputValue !== '0' && inputValue !== ''){
      if(inputValue.length !== 1){
        setInput(inputValue.slice(0,-1))
      } else{
        setInput('0')
      }
    }
  }

  









   
  return (
    <>


      <div className="calculator">
        <p className='history'>{inputValueSpace}</p>
        <div className="line group-line">
            <button className="button gray big" onClick={clear}>AC</button>
            <div className="group">
              <button className="button yellow fz-30"onClick={remove} >DE</button>
              <button className="button yellow znak" onClick={()=> onchangeButtons('+')}>+</button>

            </div>
        </div>
        <div className="line">
            <button className="button" onClick={()=> onchangeButtons('1')}>1</button>
            <button className="button" onClick={()=> onchangeButtons('2')}>2</button>
            <button className="button" onClick={()=> onchangeButtons('3')}>3</button>
            <button className="button yellow znak" onClick={()=> onchangeButtons('-')}>-</button>
        </div>
        <div className="line">
            <button onClick={()=> onchangeButtons('4')}>4</button>
            <button onClick={()=> onchangeButtons('5')}>5</button>
            <button onClick={()=> onchangeButtons('6')}>6</button>
            <button className="button yellow" onClick={()=> onchangeButtons('*')}>×</button>
        </div>
        <div className="line">
            <button onClick={()=> onchangeButtons('7')}>7</button>
            <button onClick={()=> onchangeButtons('8')}>8</button>
            <button onClick={()=> onchangeButtons('9')}>9</button>
            <button onClick={()=> onchangeButtons('/')} className="button yellow" >÷</button>
        </div>
        <div className="line">
            <button onClick={()=> onchangeButtons('0')} className="button big" >0</button>
            <button onClick={()=> onchangeButtons('.')} className="button">.</button>
            <button onClick={()=> onchangeButtons('=')} className="button yellow znak">=</button>
        </div>
    </div>
    </>
  )
}

export default App
