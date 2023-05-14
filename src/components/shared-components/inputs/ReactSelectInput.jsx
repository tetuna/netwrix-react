import React from 'react'
import ReactSelect from "react-select"

export default function ReactSelectInput({ placeholder = "", stylesControl = {}, options = [], disabled = false, selectedValue = "", setSelected }) {

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
        option: (baseStyles, state) => ({
            ...baseStyles,
            color: "#000000",
            backgroundColor: "$ffffff",
            "&:first-of-type": {
                color: state.value.length > 0 ? "#000000" : "#a0a0a0"
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
                    value={selectedValue}
                    placeholder={placeholder}
                    isDisabled={disabled}
                />
            </div>

        </>
    )
}

