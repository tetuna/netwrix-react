import React from 'react'

export default function PartnerCard(props) {

    const item = props?.item;

    return (
        <>
            <div className="partner-card">
                <div className="logo">
                    <img src={item?.logo} alt="" />
                </div>
                <div className="company-address">
                    <h3 className="company">{item?.company}</h3>
                    <div className="address">{item?.address}</div>
                </div>
                <div className="website-phone">
                    <a href={props?.item?.website} className="website">{item?.website.replace(/^https?\:\/\//i, "")}</a>
                    <a href="tel:+995-598-457-468" className="phone">{item?.phone}</a>
                </div>
                <div className="status">{item?.status}</div>
            </div>

        </>
    )
}

