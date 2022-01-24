import React from 'react';

function Evenets() {
    function hi() {
        alert("Hello")
    }
  return (

    <div>
        <button onClick={hi}>Click</button>
    </div>
  )
}

export default Evenets
