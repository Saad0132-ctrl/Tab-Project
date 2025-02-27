import React from 'react'

function A(props) {
  return (
    <div>
      <button onClick={props.handle

      } style={{background: props.color
        
      }}>{props.text}</button>
    </div>
  )
}

export default A
