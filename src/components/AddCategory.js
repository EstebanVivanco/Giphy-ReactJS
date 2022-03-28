import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDog } from '@fortawesome/free-solid-svg-icons';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState(''); //undefined

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (inputValue.trim().length > 2) {
            setCategories( cats => [ inputValue, ...cats]);
            setInputValue('');
        }


    }

    return (
        <form onSubmit={handleSubmit}>

            <h2>Buscar <FontAwesomeIcon icon={faDog} /> </h2>

            {/* npm i @fortawesome/react-fontawesome */}
            
            <input
                type="text"
                value={inputValue}
                onChange ={handleInputChange}
            />

        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


//Bueenas ss;;;