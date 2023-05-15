import React, { forwardRef } from 'react'
import searchIcon from 'assets/img/search-icon.svg'

export default forwardRef(function SearchInput(props, ref) {

    return (
        <>
            <div className="search-input">
                <input
                    className="search-company large"
                    type="text"
                    ref={ref}
                    placeholder={props?.placeholder}
                />
                <div className="search-icon-parent">
                    <button
                        className="search-icon"
                        type="submit"
                    >
                        <img src={searchIcon} alt="" />
                    </button>
                </div>
            </div>

        </>
    )
})

