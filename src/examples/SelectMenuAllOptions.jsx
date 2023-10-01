import React, { useState } from 'react'
import SelectMenu from '../components/SelectMenu'
const SelectMenuAllOptions = () => {
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
            width={'350px'} 
            inputHeight={'45px'}
            backgroundColor={"orange"}
            textColor={"red"}
            activeColor={"blue"}
            inputTextColor={"orange"}
            inputBackgroundColor={"#ffe9d3"}
            iconColor={"orange"}
        />
    )
}

export default SelectMenuAllOptions