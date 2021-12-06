import React, { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('handleSubmit', inputValue);
        if (inputValue.trim().length > 2) {

            setCategories(cats => [...cats, inputValue]);
            setinputValue('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={e => setinputValue(e.target.value)}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
