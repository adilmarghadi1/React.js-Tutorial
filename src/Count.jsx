import React, {useState} from 'react';


function Count() {

    const [count, setCount] = useState(0)

    const add = () => {
        setCount(count+1)
    }

    const subtract = () => {
        if (count>0)
        {
          setCount(count-1)  
        }
        
    }
    return (
        <div>
            
                <label>
                    <input type='number' value={count} onChange={(e)=>setCount(parseInt(e.target.value))} />

                    <button onClick={add}>Add</button>
                    <button onClick={subtract}>Subtract</button>
                </label>

            <p>{count}</p>
        </div>
    )
}

export default Count