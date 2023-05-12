import React from 'react'
import logo from 'assets/img/standard-logo-distributor.jpg'

export default function PartnerCard() {

    return (
        <>
            <div className="partner-card">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="company-address">
                    <h3 className="company">C Technology</h3>
                    <div className="address">Sydney, Level 7, 171 Clarence Street</div>
                </div>
                <div className="website-phone">
                    <a href="#" className="website">Website</a>
                    <div className="phone">+61 2 8001 0250</div>
                </div>
                <div className="status">Distributor</div>
            </div>

        </>
    )
}

