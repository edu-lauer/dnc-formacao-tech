import { useState } from "react";
import Clock from "./Clock";

export default function AppClock() {

    const [show, setShow] = useState(false)

    return <>
        {show && <Clock />}

        <button onClick={() =>
            setShow(!show)
        }>
            {show ? 'Esconder' : 'Mostrar'}
        </button>
    </>

}