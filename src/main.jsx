import React from 'react'
import ReactDOM from 'react-dom/client'

import { useState } from 'react'
import SelectMenu from './components/SelectMenu'
import './index.css'

function App() {

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
    <>
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
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

export default App
