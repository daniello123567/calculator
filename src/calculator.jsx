import  { useState } from 'react'
function Calculator() {
  const [result,setResult] = useState("");
  const handleClick = (e)=>{
   setResult(result.concat(e.target.name))
  }
  const handleClear = ()=>{
    setResult("")
  }
  const backSpace = ()=>{
    setResult(result.slice(0,-1));
  }
  const handleCal = ()=>{
    try{
      setResult(eval(result).toString())
    }catch(err){
      setResult('error')
        setTimeout(()=>{
          setResult("")
        },3000);
    }
  }

  return (
    <div className='w-[60%] pb-2 px-2 pt-2 rounded-sm mx-auto mt-6 bg-blue-500 '>
      <form>
      <input className='border text-right text-5xl focus:outline-none bg-gray-300 rounded-sm w-full px-2' value={result} type="text" />
      </form>
      <div className='grid  mt-2 grid-cols-3 gap-1'>
        <button className='col-span-2' onClick={handleClear}>clear</button>
        <button onClick={backSpace}>C</button>
        <button name='/' onClick={handleClick}>&divide;</button>
        <button name='7' onClick={handleClick}>7</button>
        <button name='8' onClick={handleClick}>8</button>
        <button name='9' onClick={handleClick}>9</button>
        <button name='1' onClick={handleClick}>1</button>
        <button name='2' onClick={handleClick}>2</button>
        <button name='3' onClick={handleClick}>3</button>
        <button name='4' onClick={handleClick}>4</button>
        <button name='5' onClick={handleClick}>5</button>
        <button name='6' onClick={handleClick}>6</button>
        <button name='0' onClick={handleClick}>0</button>
        <button name='+' onClick={handleClick}>+</button>
        <button name='-' onClick={handleClick}>-</button>
        <button className='col-span-2' onClick={handleCal}>=</button>
      </div>
    </div>
  )
}

export default Calculator
