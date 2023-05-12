import React from 'react'
import ReactSelect from "react-select"
import dropdownIndicatorIcon from 'assets/img/dropdown-Indicator-icon.svg'


export default function ReactSelectInput({ placeholder = "Please select", stylesControl = {} }) {

    const customStyles = {
        control: (baseStyles, state) => ({
            ...baseStyles,
            "&:hover": {
                borderColor: "#bababa",
                cursor: "pointer"
            },
            boxShadow: "none",
            border: "2px solid #ffffff",
            backgroundColor: "transperent",
            color: "#ffffff",
            ...stylesControl
        }),
        input: (baseStyles) => ({
            ...baseStyles,
            color: '#ffffff',
            "&:focus": {
                boxShadow: "none",
            },
        }),
        placeholder: (baseStyles) => ({
            ...baseStyles,
            color: '#ffffff',
        }),
        dropdownIndicator: baseStyles => ({
            ...baseStyles,
            color: "inherit",
            border: "none",
        }),
        singleValue: (baseStyles) => ({
            ...baseStyles,
            color: "#ffffff"
        }),
    }

    const options = [
        { id: "val1", label: "Label1" },
        { id: "val2", label: "Label2" },
        { id: "val3", label: "Label3" },
        { id: "val4", label: "Label4" },
        { id: "val5", label: "Label5" },
        { id: "val6", label: "Label6" },
        { id: "val7", label: "Label7" },
        { id: "val8", label: "Label8" },
        { id: "val9", label: "Label9" },
    ]

    const tempOptions = options.map(option => ({
        value: option.id,
        label: option.label
    }));

    const handleChange = (selectedOption) => {
        console.log(selectedOption);
    }

    return (
        <>
            <div className="react-select-input">
                <ReactSelect
                    options={tempOptions}
                    onChange={handleChange}
                    styles={customStyles}
                    placeholder={placeholder}
                />
            </div>

        </>
    )
}

