import React, {useState, useEffect} from 'react'


function Calc() {
    const [count, setCount] = useState(0)
    const [calculation, setCalculation] = useState(0)

    useEffect(() => {
        setCalculation(() => count*2)
    }, [count])
    return (
        <div>
            <p>Count : {count}</p>
            <button onClick={() => setCount((c)=>c+1)}>+</button>
            <p>Calcuation : {calculation}</p>
        </div>
    )
}

export default Calc