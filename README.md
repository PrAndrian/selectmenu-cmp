# SelectMenu Component

The SelectMenu component is a React component that provides a customizable dropdown menu with search functionality. It allows users to select an option from a list of values and provides various customization options for appearance and behavior.

## Installation

To use the SelectMenu component in your React application, follow these steps:

1. Install the package:

   ```bash
   npm install selectmenu-cmp
   ```

1. Install the tailwind in your project: https://tailwindcss.com/docs/installation/framework-guides

1. Your tailwin.config.js should be like this :

   ```javascript
   /** @type {import('tailwindcss').Config} */
    export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        './node_modules/selectmenu-cmp/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
    }
   ```

2. Import the SelectMenu component into your React application:

   ```javascript
   import SelectMenu from "selectmenu-cmp";
   ```

3. You can now use the `SelectMenu` component in your application.

## Usage

Here's an example of how to use the `SelectMenu` component:

```javascript
import React, { useState } from 'react';
import SelectMenu from './SelectMenu';

function App() {
  const [selectedValue, setSelectedValue] = useState('');
  const values = [
    { name: 'Option 1' },
    { name: 'Option 2' },
    { name: 'Option 3' },
  ];

  return (
    <div>
      <h1>SelectMenu Example</h1>
      <SelectMenu
        id="mySelectMenu"
        values={values}
        inputValue={selectedValue}
        setter={setSelectedValue}
        width={'350px'}
        inputHeight={'45px'}
        backgroundColor={"orange"}
        textColor={"red"}
        activeColor={"blue"}
        inputTextColor={"orange"}
        inputBackgroundColor={"#ffe9d3"}
        iconColor={"orange"}
      />
    </div>
  );
}

export default App;
```

## Props

The `SelectMenu` component accepts the following props:

- `id` (string, required): A unique identifier for the component.
- `values` (array of objects, required): An array of options to display in the dropdown.
- `inputValue` (string, required): The currently selected value.
- `setter` (function, required): A function to set the selected value.
- `isError` (bool, required): Indicates whether there is an error in the component.
- `width` (string): The width of the component (default: '100%').
- `inputHeight` (string): The height of the input field (default: '45px').
- `backgroundColor` (string): The background color of the component (default: 'transparent').
- `textColor` (string): The text color of the component (default: 'black').
- `inputBackgroundColor` (string): The background color of the input field (default: 'transparent').
- `inputTextColor` (string): The text color of the input field (default: 'black').
- `iconColor` (string): The color of the dropdown icon (default: 'black').
- `activeColor` (string): The background color of the selected option (default: '#D0E7B9').

## License

This component is open-source and available under the [MIT License](LICENSE).
