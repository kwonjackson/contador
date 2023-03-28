import React, {useState} from "react";

import {CounterContainer} from './Components/Container'
import {Button} from './Components/Button'
import {ButtonContainer} from './Components/Button'
import {NumberDisplay} from './Components/NumberDisplay'

function App () {


const [numero, setNumero] = useState (0)

  return (
    <CounterContainer>
      <ButtonContainer>
        <NumberDisplay>{numero}</NumberDisplay>
        <Button onClick={()=>{setNumero(numero < 10 ? numero +1 : numero)}}>+1</Button>
        <Button onClick={()=>{setNumero(numero > -10 ? numero -1 : numero)}}>-1</Button>
      </ButtonContainer>
    </CounterContainer>
  );
}
export default App;