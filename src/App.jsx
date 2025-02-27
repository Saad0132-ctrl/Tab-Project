// import { useState } from 'react'

// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)
// function add(){
//   setCount(count+1)
// }
// function minus(){
// if(count>0){
//   setCount(count-1)
// }
// function reset(){
//   setCount(0)
// }
//   return (
//     <>
//     {count}
//      <button onClick={add}>add</button>
//      <button onClick={minus}>minus</button>
//      <button onClick={reset}>reset</button>
//     </>
//   )
// }
// }
// export default App

// import A from './components/A'
// import { useState } from 'react'
// function App()
// {
//   const [a,setA]=useState(false)
//   const [b,setB]=useState(false)
//   const [c,setC]=useState(false)
//   const [d,setD]=useState(false)

//   const obj={
//     a:'A',
//     b:'B',
//     c:'C',
//     d:'D'
//   }
//   function handlea(){
//     setA(true)
//     setB(false)
//     setC(false)
//     setD(false)
//   }
//   function handleb(){
//     setA(false)
//     setB(true)
//     setC(false)
//     setD(false)
//   }
//   function handlec(){
//     setA(false)
//     setB(false)
//     setC(true)
//     setD(false)
//   }
//   function handled(){
//     setA(false)
//     setB(false)
//     setC(false)
//     setD(true)
//   }
// {
//   return(
//     <>
//     <A text = {obj.a} color={a? 'red' : "white" } handle={handlea} />
//     <A text={obj.b} color={b?  'red' :'white' } handle={handleb} />
//     <A text={obj.c} color={c?'red':'white' }   handle={handlec}  />
//     <A text={obj.d} color={d?  'red': 'white' } handle={handled} />

//     {a ? <p>I am A</p> : null}
//       {b ? <p>I am B</p> : null}
//       {c ? <p>I am C</p> : null}
//       {d ? <p>I am D</p> : null}

//     </>
//   )
// }}
// export default App



import A from './components/A'
import React, { useState } from 'react'
function App () {
  const [active, setActive] = useState(null)
    const obj={
    a:'A',
    b:'B',
    c:'C',
    d:'D'
  }
  function handle (butt) {
    setActive(butt)
  }
  return (
    <>
      <A text={obj.a} color={active =="a"? 'red' : 'white'} handle={()=>handle('a')} />
      <A text={obj.b} color={active=="b" ? 'red' : 'white'} handle={()=>handle('b')} />
      <A text={obj.c} color={active=="c" ? 'red' : 'white'} handle={()=>handle('c')} />
      <A text={obj.d} color={active=="d" ? 'red' : 'white'} handle={()=>handle('d')} />

      {active  && <p>I am {active}</p> }
    </>
  )
}
export default App


