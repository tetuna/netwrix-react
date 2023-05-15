import React, { useState, useEffect, useRef } from 'react'
import axios from "axios";
import Header from "components/layout-components/Header"
import SearchInput from "components/shared-components/inputs/SearchInput"
import ReactSelectInput from "components/shared-components/inputs/ReactSelectInput"
import PartnerCard from "components/shared-components/specific/PartnerCard"
import 'assets/css/pages/partner-locator/partner-locator.css'
import background from 'assets/img/bg.webp'
import loadingIcon from 'assets/img/loading.svg'
import notFoundImage from 'assets/img/not-found.svg'

export default function PartnerLocator() {
    const baseUrl = import.meta.env.VITE_APP_API_URL;

    const [searchResult, setSearchResult] = useState([]);
    const [resultLoading, setResultLoading] = useState(true);
    const [pageLoading, setPageLoading] = useState(true);
    const [pageLoadingClosing, setPageLoadingClosing] = useState(false);
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [selectedType, setSelectedType] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const searchInputRef = useRef();

    const types = [
        { value: "MSP Partner", label: "MSP Partner" },
        { value: "Preferred Partner", label: "Preferred Partner" },
        { value: "Premium Partner", label: "Premium Partner" },
        { value: "Elite Partner", label: "Elite Partner" },
        { value: "Distributor", label: "Distributor" },
    ]

    useEffect(() => {
        setResultLoading(true);
        axios.get(baseUrl + "partners").then(res => {
            setSearchResult(res?.data?.partners);
            setCountries(res?.data?.countries.map(option => ({
                id: option.country_id,
                value: option.short_name,
                label: option.name
            })));
            setResultLoading(false);
        });
        setPageLoadingClosing(true);
        setTimeout(() => {
            setPageLoading(false);
        }, 600);
    }, []);

    useEffect(() => {
        filterData();
    }, [selectedType, selectedCountry, selectedState]);

    useEffect(() => {
        setSelectedState({ value: "", label: "State" });
        axios.get(baseUrl + "states/search-by-country", {
            params: {
                country: selectedCountry?.id
            }
        }).then(res => {
            setStates(res?.data?.states.map(option => ({
                value: option.short_name,
                label: option.name
            })));
        });
    }, [selectedCountry]);

    const handleSubmit = (event) => {
        event.preventDefault();
        filterData();
    }

    const filterData = () => {
        setResultLoading(true)
        axios.get(baseUrl + "partners/search", {
            params: {
                search_company: searchInputRef.current.value,
                type: selectedType?.value,
                country: selectedCountry?.value,
                state: selectedState?.value
            }
        }).then(res => {
            setSearchResult(res?.data?.partners);
            setResultLoading(false);
        });
    }

    return (
        <>
            {pageLoading ?
                <div className={`page-loading${pageLoadingClosing ? " " + "closing" : ""}`}>
                    <img src={loadingIcon} alt="" />
                </div>
                :
                null
            }
            <Header />
            <div className="container-search" style={{ background: `url(${background})` }}>
                <div className="content">
                    <h2><span>Netwrix </span>Partner Locator</h2>
                    <p>
                        Hundreds of Netwrix partners around the world are standing by to help you.<br />With our Partner Locator you can easily find the list of authorized partners <span>in your area.</span>
                    </p>
                    <form onSubmit={handleSubmit}>
                        <SearchInput
                            ref={searchInputRef}
                            placeholder={window.innerWidth > 767 ? "Search by company name or address..." : "Search"}
                        />
                    </form>
                    <div className="type-country-state">
                        <ReactSelectInput
                            placeholder="Type"
                            options={types}
                            selectedValue={selectedType}
                            setSelected={setSelectedType}
                        />
                        <ReactSelectInput
                            placeholder="Country"
                            options={countries}
                            selectedValue={selectedCountry}
                            setSelected={setSelectedCountry}
                            stylesControl={
                                window.innerWidth > 767 ?
                                    {
                                        borderTopRightRadius: "0px",
                                        borderBottomRightRadius: "0px",
                                    } :
                                    {}
                            }
                        />
                        <ReactSelectInput
                            placeholder="State"
                            options={states}
                            selectedValue={selectedState}
                            setSelected={setSelectedState}
                            disabled={states.length == 0}
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
                    {searchResult.length == 0 ?
                        (resultLoading ? <div className="result-loading">
                            <div className="loading-icon">
                                <img src={loadingIcon} alt="" />
                            </div>
                        </div> :
                            <div className="not-found">
                                <div className="image">
                                    <img src={notFoundImage} alt="" />
                                </div>
                                <h3>We couldn’t find any records that match your search parameters.</h3>
                                <h3>Please try a different search.</h3>
                            </div>
                        )
                        :
                        searchResult.map((item, index) => <PartnerCard item={item} key={index} />)
                    }
                </div>
            </div>
        </>
    )
}

