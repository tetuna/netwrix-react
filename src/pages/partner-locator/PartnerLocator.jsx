import React, { useState, useEffect } from 'react'
import 'assets/css/pages/partner-locator/partner-locator.css'
import netwrixLogo from 'assets/img/netwrix-logo.svg'

export default function PartnerLocator() {

    useEffect(() => {
        console.log("Start()");
    }, []);

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

