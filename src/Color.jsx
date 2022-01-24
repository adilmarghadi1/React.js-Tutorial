import React, {useState} from 'react'

function Color() {

    const [color, setColor] = useState('red')
    return (
        <div>
            <h1>My Favorite Color is {color}</h1>
            <button type='button' onClick={(e)=>setColor('blue')}>Blue</button>
            <button type='button' onClick={(e)=>setColor('Black')}>Black</button>
            <button type='button' onClick={(e)=>setColor('Yellow')}>Yellow</button>
            <button type='button' onClick={(e)=>setColor('Orange')}>Orange</button>
        </div>
    )
}

export default Color