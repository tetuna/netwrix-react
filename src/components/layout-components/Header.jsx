import React from 'react'
import netwrixLogo from 'assets/img/netwrix-logo.svg'

export default function Header() {

    return (
        <>
            <header>
                <nav>
                    <div className="logo">
                        <img src={netwrixLogo} alt="" />
                    </div>
                </nav>
            </header>
        </>
    )
}

