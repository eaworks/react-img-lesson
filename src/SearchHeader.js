
import React, { useState } from 'react'
function SearchHeader({ search }) {
    const [value, setValue] = useState('')
    const handleFormSubmit = (event) => {
        event.preventDefault(); // Sayfanın Yenilenmesini Engeller
        search(value)
    }
    const handleChange = (event) => {
        setValue(event.target.value)
    }
    return <div className="searchDiv">
        <form onSubmit={handleFormSubmit}>
            <label>Ne ariyorsunuz?</label>
            <input value={value} onChange={handleChange} />
        </form>
    </div>;
}
export default SearchHeader;