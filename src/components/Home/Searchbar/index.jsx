import React from 'react'
import "./style.css";

const Searchbar = ({value, handleSearchKey, clearSearch, formSubmit}) => (
    <div className='searchBar-wrap'>
        <form onSubmit={formSubmit}>
            <input
            type="text"
            onChange={handleSearchKey}
            placeholder="Search By Category"
            value={value}
            />
            {value && <span onClick={clearSearch}>X</span>}
            <button>Go</button>
        </form>
    </div>
)

export default Searchbar 