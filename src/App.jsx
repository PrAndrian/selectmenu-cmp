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
    <main className='flex flex-col justify-center items-center py-10'>
      <h1 className='text-3xl font-bold'>Examples</h1>
        <div className='w-1/2 flex flex-col justify-center gap-10'>
            <h2 className='text-3xl'>1) Select Menu Default</h2>
            <SelectMenuDefault/>
            <h2 className='text-3xl'>2) Select Menu Width</h2>
            <SelectMenuWidth/>
            <h2 className='text-3xl'>3) Select Menu Input Height</h2>
            <SelectMenuInputHeight/>
            <h2 className='text-3xl'>4) Select Menu Background Color</h2>
            <SelectMenuBackgroundColor/>
            <h2 className='text-3xl'>5) Select Menu Text Color</h2>
            <SelectMenuTextColor/>
            <h2 className='text-3xl'>6) Select Menu ActiveColor</h2>
            <SelectMenuActiveColor/>
            <h2 className='text-3xl'>7) Select Menu Input Text Color</h2>
            <SelectMenuInputTextColor/>
            <h2 className='text-3xl'>8) Select Menu Input Background Color</h2>
            <SelectMenuInputBackgroundColor/>
            <h2 className='text-3xl'>9) Select Menu Icon Color</h2>
            <SelectMenuIconColor/>
        </div>
    </main>
  )
}

export default App