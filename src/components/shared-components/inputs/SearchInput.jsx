import React from 'react'
import searchIcon from 'assets/img/search-icon.svg'

export default function SearchInput() {

    return (
        <>
            <div className="search-input">
                <input type="text" className="search-company large" placeholder="Search by company name or adress..." />
                <input type="text" className="search-company small" placeholder="Search" />
                <div className="search-icon-parent">
                    <span className="search-icon">
                        <img src={searchIcon} alt="" />
                    </span>
                </div>
            </div>

        </>
    )
}

