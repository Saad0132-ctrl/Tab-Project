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

// import A from './components/A'
// import React, { useState } from 'react'
// function App () {
//   const [active, setActive] = useState(null)
//     const obj={
//     a:'A',
//     b:'B',
//     c:'C',
//     d:'D'
//   }
//   function handle (butt) {
//     setActive(butt)
//   }
//   return (
//     <>
//       <A text={obj.a} color={active =="a"? 'red' : 'white'} handle={()=>handle('a')} />
//       <A text={obj.b} color={active=="b" ? 'red' : 'white'} handle={()=>handle('b')} />
//       <A text={obj.c} color={active=="c" ? 'red' : 'white'} handle={()=>handle('c')} />
//       <A text={obj.d} color={active=="d" ? 'red' : 'white'} handle={()=>handle('d')} />

//       {active  && <p>I am {active}</p> }
//     </>
//   )
// }
// export default App


import { useState } from "react"

function App () {
  const [formData, setData] = useState({
    name: '',
    age: ''
  })

  // const handleChangeName = e => {
  //   return setData({
  //     name: e.target.value,
  //     age: formData.age
  //   })
  // }
  const handleChange = e => {
    const { name, value } = e.target
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  console.log(formData)
  return (
    <>
      <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='bg-white p-6 rounded-lg shadow-md w-96'>
          <h2 className='text-xl font-semibold mb-4 text-center'>User Form</h2>
          <input
            type='text'
            name='name'
            placeholder='Enter name'
            value={formData.name}
            onChange={handleChange}
            className='w-full p-3 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
          <input
            type='number'
            name='age'
            placeholder='Enter age'
            value={formData.age}
            onChange={handleChange}
            className='w-full p-3 border rounded mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400'
          />
          <div className='p-4 bg-gray-50 rounded-lg mt-4 text-center'>
            <p className='text-lg font-medium text-gray-700'>
              Name: {formData.name}
            </p>
            <p className='text-lg font-medium text-gray-700'>
              Age: {formData.age}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default App