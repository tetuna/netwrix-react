import React, { useState, useEffect, useRef } from 'react'
import axios from "axios";
import Header from "components/layout-components/Header"
import SearchInput from "components/shared-components/inputs/SearchInput"
import ReactSelectInput from "components/shared-components/inputs/ReactSelectInput"
import PartnerCard from "components/shared-components/specific/PartnerCard"
import 'assets/css/pages/partner-locator/partner-locator.css'
import background from 'assets/img/bg.webp'
import searchIcon from 'assets/img/search-icon.svg'

export default function PartnerLocator() {

    const [searchResult, setSearchResult] = useState([]);
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
        axios.get('http://netwrix-laravel.test/api/partners').then(res => {
            setSearchResult(res?.data?.data);
            setCountries(res?.data?.countries.map(option => ({
                id: option.country_id,
                value: option.short_name,
                label: option.name
            })));
        });
    }, []);

    useEffect(() => {
        filterData();
    }, [selectedType, selectedState]);

    useEffect(() => {
        filterData();
        axios.get('http://netwrix-laravel.test/api/states/search-by-country', {
            params: {
                country: selectedCountry?.id
            }
        }).then(res => {
            // setStates(res?.data?.data);
            setStates(res?.data?.data.map(option => ({
                // id: option.country_id,
                value: option.short_name,
                label: option.name
            })));
        });
    }, [selectedCountry]);

    const handleSubmit = (event) => {
        event.preventDefault();
        filterData();
    }
    // const toReactSelectKey = (options) => {
    //     const tempOptions = options.map(option => ({
    //         value: option.id,
    //         label: option.label
    //     }));
    // }

    const filterData = (data) => {
        axios.get('http://netwrix-laravel.test/api/partners/search', {
            params: {
                search_company: searchInputRef.current.value,
                type: selectedType?.value,
                country: selectedCountry?.value,
                state: selectedState?.value
            }
        }).then(res => {
            setSearchResult(res?.data?.data);
        });
    }

    return (
        <>
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
                            setSelected={setSelectedType}
                        />
                        <ReactSelectInput
                            placeholder="Country"
                            options={countries}
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
                    {searchResult.map((item, index) => <PartnerCard item={item} key={index} />)}
                </div>
            </div>
        </>
    )
}

