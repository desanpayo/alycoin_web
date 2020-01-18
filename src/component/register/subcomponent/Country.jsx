import React from 'react';

const Country = (props) => {
    const { name } = props.country;
    return (
        <option value={name}>
            { name }
        </option>
    )
} 

export default Country;