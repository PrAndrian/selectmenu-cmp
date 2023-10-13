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
            <div>
              <span className='font-bold'>Default behavior with props :</span>
              <ul>
                <li>`id` (string, required): A unique identifier for the component.</li>
                <li>`values` (array of objects, required): An array of options to display in the dropdown.</li>
                <li>`inputValue` (string, required): The currently selected value.</li>
                <li>`setter` (function, required): A function to set the selected value.</li>
                <li>`isError` (bool, required): Indicates whether there is an error in the component.</li>
              </ul>
            </div>
            <SelectMenuDefault/>
            <h2 className='text-3xl'>2) Select Menu Width</h2>
            <p>`width` (string): The width of the component (default: '100%')</p>
            <SelectMenuWidth/>
            <h2 className='text-3xl'>3) Select Menu Input Height</h2>
            <p>`inputHeight` (string): The height of the input field (default: '45px').</p>
            <SelectMenuInputHeight/>
            <h2 className='text-3xl'>4) Select Menu Background Color</h2>
            <p>`backgroundColor` (string): The background color of the component (default: 'transparent').</p>
            <SelectMenuBackgroundColor/>
            <h2 className='text-3xl'>5) Select Menu Text Color</h2>
            <p>`textColor` (string): The text color of the component (default: 'black').</p>
            <SelectMenuTextColor/>
            <h2 className='text-3xl'>6) Select Menu ActiveColor</h2>
            <p>`activeColor` (string): The background color of the selected option (default: '#D0E7B9').</p>
            <SelectMenuActiveColor/>
            <h2 className='text-3xl'>7) Select Menu Input Text Color</h2>
            <p>`inputTextColor` (string): The text color of the input field (default: 'black').</p>
            <SelectMenuInputTextColor/>
            <h2 className='text-3xl'>8) Select Menu Input Background Color</h2>
            <p>`inputBackgroundColor` (string): The background color of the input field (default: 'transparent').</p>
            <SelectMenuInputBackgroundColor/>
            <h2 className='text-3xl'>9) Select Menu Icon Color</h2>
            <p>`iconColor` (string): The color of the dropdown icon (default: 'black').</p>
            <SelectMenuIconColor/>
        </div>
    </main>
  )
}

export default App