import React from 'react';
import './App.css';
import Count from './Count';
import Evenets from './Evenets'
import Froms from './Froms';
import Color from './Color';
import Effect  from './Effect';
import Calc from './Calc';
function App() {

  const myelement = <h1>I Love JSX!</h1>;
  const myelement2 = React.createElement('h1', {}, 'Hello Guys')


  const x = 5;
 let text
  if (x>10)
      text = 'Good Buy'
  else {
     text = 'Hello'
  }
  return (
    <div>
        <h1>{myelement}</h1>
        <h1>{myelement2}</h1>
        <h1>{elt1}</h1>

        <h1 className='first'>Hello World</h1>


        {/* If Statement in react */}

        <h2>{text}</h2>
      
      {/* If Statement 2 in react */}

      <h1>{(x)>10?"Hello":"Bye"}</h1>
      

      <Second name='adil' />

      <Evenets />

      <Froms />
      <Count />
      <Color />
      <Effect />
      <Calc />
    </div>
  );
}

export default App;


function Second(props)
{
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}