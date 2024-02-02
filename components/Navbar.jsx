import {useState} from 'react';

export const Navbar = ({mensaje}) => {

    const [numero, setNumero] = useState (0)


    return (
        <div>
            <button onClick={() => setNumero(numero +1 )} > Sumar boton</button>
            <p> {numero} </p>
            <p>{mensaje} </p>
            <img src=" {../}" alt= "" />
        </div>
    );
}

export default Navbar;
