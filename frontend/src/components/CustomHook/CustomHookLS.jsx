import React from 'react';
import useLocalStorage from './UseLocalStorage';

function CustomHookLS() {
    
    const [name, setName] = useLocalStorage('name', '');
    
    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            <input type="text" value={name} onChange={handleChange} />
            <p>Hello, {name}!</p>
        </div>
    );
}
export default CustomHookLS