import React, { useState } from 'react'
import SelectMenu from '../components/SelectMenu'
const SelectMenuBackgroundColor = () => {
    const departements = [
        {
            name : "Sales"
        },
        {
            name : "Marketing"
        },
        {
            name : "Engineering"
        },
        {
            name : "Human Resources"
        },
        {
            name : "Legal"
        }
    ]
    const [departement, setDepartement] = useState('')

    return (
        <SelectMenu
            id={"departement"}
            values={departements}
            setter={setDepartement}
            isError={false}
            inputValue={departement}
            backgroundColor={"#75E6DA"}
        />
    )
}

export default SelectMenuBackgroundColor