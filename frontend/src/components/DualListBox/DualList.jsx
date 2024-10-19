import { useState } from 'react';

import DualListBox from 'react-dual-listbox';
import 'react-dual-listbox/lib/react-dual-listbox.css';


const DualList = () => {

    const [selected, setSelected] = useState([]);


    const options = [
        { value: 'one', label: 'Option One' },
        { value: 'two', label: 'Option Two' },
    ];


    return (
        <DualListBox
            options={options}
            selected={selected}
            onChange={(newValue) => setSelected(newValue)}
        />
    )
}

export default DualList