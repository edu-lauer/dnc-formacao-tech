import { useState } from 'react'

function AppCounterFunctional() {
    
    const [counter, setCounter] = useState(0)

    return <>
        <h3>Valor(functional): {counter}</h3>

        <button onClick={() => {
            setCounter(counter - 1)
        }}>-1</button>

        <button onClick={() => {
            setCounter(counter + 1)
        }}>+1</button>
    </>
}

export default AppCounterFunctional