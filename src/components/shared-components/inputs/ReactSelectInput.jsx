import React from 'react'
import ReactSelect from "react-select"
import dropdownIndicatorIcon from 'assets/img/dropdown-Indicator-icon.svg'

export default function ReactSelectInput({ placeholder = "", stylesControl = {}, options = [], disabled = false, setSelected }) {

    const customStyles = {
        control: (baseStyles) => ({
            ...baseStyles,
            boxShadow: "none",
            border: "2px solid #ffffff",
            backgroundColor: "transperent",
            color: "#ffffff",
            ...stylesControl,
            "&:hover": {
                borderColor: "#bababa",
                cursor: "pointer"
            },
        }),
        input: (baseStyles) => ({
            ...baseStyles,
            color: "#ffffff",
            "&:focus": {
                boxShadow: "none",
            },
        }),
        placeholder: (baseStyles) => ({
            ...baseStyles,
            color: "#ffffff",
        }),
        option: (baseStyles) => ({
            ...baseStyles,
            color: "#000000",
            backgroundColor: "$ffffff",
            "&:first-of-type": {
                color: "#a0a0a0",
            },
        }),
        dropdownIndicator: baseStyles => ({
            ...baseStyles,
            color: "inherit",
            border: "none",
            "&:hover": {
                color: "#bababa",
            },
        }),
        singleValue: (baseStyles) => ({
            ...baseStyles,
            color: "#ffffff"
        }),
        clearIndicator: (baseStyles) => ({
            ...baseStyles,
            color: "#ffffff",
            "&:hover": {
                color: "#bababa",
            },
        }),
        selectOption: (baseStyles) => ({
            ...baseStyles,
            backgroundColor: "#ffffff",
            "&:hover": {
                color: "#bababa",
            },
        }),
    }

    const modifyOptions = () => {
        const tempOptions = [...options];

        tempOptions.unshift({ value: "", label: placeholder });
        return tempOptions;
    }

    const tempOptions = modifyOptions();

    const handleChange = (selectedOption) => {
        setSelected(selectedOption);
    }

    return (
        <>
            <div className="react-select-input">
                <ReactSelect
                    options={tempOptions}
                    onChange={(selectedOption) => setSelected(selectedOption)}
                    styles={customStyles}
                    placeholder={placeholder}
                    isDisabled={disabled}
                />
            </div>

        </>
    )
}

