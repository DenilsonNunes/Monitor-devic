import { useState } from 'react';

import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';


const DualList = ({filtros, onSelectedChange }) => {

    const [selected, setSelected] = useState([]);

    console.log('No dual list ', selected)




    // Atualiza o estado local e também chama a função passada pelo componente pai
    const handleChange = (newValue) => {
        setSelected(newValue);
        onSelectedChange(newValue); // Chama a função do componente pai
    };


    const options = filtros.map(option => ({
        value: option.CodUnd,
        label: option.CodUnd +'-'+ option.DescrUnd // Substitui todos os labels pelo valor de 'descUnidade'
    }));


    return (
        <DualListBox
            options={options}
            selected={selected}
            onChange={handleChange}
        />
    )
}

export default DualList