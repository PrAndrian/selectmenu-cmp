import React from 'react'
import SelectMenuAllOptions from './examples/SelectMenuAllOptions'
import SelectMenuDefault from './examples/SelectMenuDefault'
import SelectMenuWidth from './examples/SelectMenuWidth'
import SelectMenuInputHeight from './examples/SelectMenuInputHeight'
import SelectMenuBackgroundColor from './examples/SelectMenuBackgroundColor'
import SelectMenuTextColor from './examples/SelectMenuTextColor'
import SelectMenuActiveColor from './examples/SelectMenuActiveColor'
import SelectMenuInputTextColor from './examples/SelectMenuInputTextColor'
import SelectMenuInputBackgroundColor from './examples/SelectMenuInputBackgroundColor'
import SelectMenuIconColor from './examples/SelectMenuIconColor'

const App = () => {
  return (
    <main className='h-screen flex justify-center items-center mt-[-100px]'>
        <div className='w-1/2 flex justify-center'>
            {/* <SelectMenuAllOptions/> */}
            {/* <SelectMenuDefault/> */}
            {/* <SelectMenuWidth/> */}
            {/* <SelectMenuInputHeight/> */}
            {/* <SelectMenuBackgroundColor/> */}
            {/* <SelectMenuTextColor/> */}
            {/* <SelectMenuActiveColor/> */}
            {/* <SelectMenuInputTextColor/> */}
            {/* <SelectMenuInputBackgroundColor/> */}
            <SelectMenuIconColor/>
        </div>
    </main>
  )
}

export default App