import React, {useState} from 'react';

function Froms() {

    const [name, setName] = useState('Hello')

    const [myCar, setMyCar] = useState('Tesla')

    function handleChange(e){
        setMyCar(e.target.value)
    }
  return (
      <div>
          <form>
          <label htmlFor='hi'>
              Enter Ur Name
              <input type='text' name='hi' value={name} onChange={(event)=>setName(event.target.value)} />
          </label>
          </form>

          <p>{name}</p>
          <br />
          <br/>

          <select value={myCar} onChange={handleChange}>
              <option value="Ford">Ford</option>
              <option value="Kia">Kia</option>
              <option value="R4">R4</option>
        </select>
        <h3>{myCar}</h3>
      </div>
  )
}


export default Froms;
