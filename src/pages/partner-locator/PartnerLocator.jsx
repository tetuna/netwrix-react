import React, { useState, useEffect } from 'react'
import Header from "components/layout-components/Header"
import SearchInput from "components/shared-components/inputs/SearchInput"
import ReactSelectInput from "components/shared-components/inputs/ReactSelectInput"
import PartnerCard from "components/shared-components/specific/PartnerCard"
import 'assets/css/pages/partner-locator/partner-locator.css'
import background from 'assets/img/bg.webp'
import searchIcon from 'assets/img/search-icon.svg'

export default function PartnerLocator() {

    useEffect(() => {
        console.log("Start()");
    }, []);

    return (
        <>
            <Header />
            <div className="container-search" style={{ background: `url(${background})` }}>
                <div className="content">
                    <h2><span>Netwrix </span>Partner Locator</h2>
                    <p>
                        Hundreds of Netwrix partners around the world are standing by to help you.<br />With our Partner Locator you can easily find the list of authorized partners <span>in your area.</span>
                    </p>
                    <SearchInput />
                    <div className="type-country-state">
                        <ReactSelectInput placeholder="Type" />
                        <ReactSelectInput placeholder="Country"
                            stylesControl={
                                window.innerWidth > 767 ?
                                    {
                                        borderTopRightRadius: "0px",
                                        borderBottomRightRadius: "0px",
                                    } :
                                    {}
                            }
                        />
                        <ReactSelectInput placeholder="State"
                            stylesControl={
                                window.innerWidth > 767 ?
                                    {
                                        borderLeft: "none",
                                        borderTopLeftRadius: "0px",
                                        borderBottomLeftRadius: "0px",
                                    } :
                                    {}
                            }
                        />
                    </div>
                </div>
            </div>
            <div className="container-result">
                <div className="content">
                    <PartnerCard />
                    <PartnerCard />
                    <PartnerCard />
                    <PartnerCard />
                    <PartnerCard />
                    <PartnerCard />
                    <PartnerCard />
                    <PartnerCard />
                </div>
            </div>
        </>
    )
}

