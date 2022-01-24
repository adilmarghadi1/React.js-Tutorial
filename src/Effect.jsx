import React, {useState, useEffect} from "react";

function Effect() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count+1)
        }, 1000)
    })
    return (
        <div>
            <h1>Hello Guys {count} time!</h1>
        </div>      
    )
}

export default Effect