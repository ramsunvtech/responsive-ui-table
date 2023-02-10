Done - Base Setup
Done - Basic Table Component
Done - Basic Table Header
Done - Basic Table Rows
Done - Simple Story book setup
Done - Basic Dynamic Table Header
Done - Basic Dynamic Table Rows
Done - Story Book Use Cases with no proper output.
Done - Basic Table
Done - Basic No Data
Done - Basic Radio Button
Done - Basic Single Selection
Done - Basic Multiple Selections
Done - Basic Sortable Rows
Done - Sorting Basic Implementation
Done - Basic Checkbox Button
- Fix Left and Padding for rows borders.
- Sort by date as well
- Basic Mobile Styles.
- Fix Radio button and Checkbox span issue
- Fix Radio button and Checkbox style match figma
- Select the Row on Click
- Basic Dynamic Table Rows with Responsive styles
- Fix Font issues
- Basic Theming Options
- Port Github in to Code Sandbox.
- No third-party UI component libraries
- Move all CSS colors to variables
- Final Cleanup
- Shorten the Component Code less lines.
Sorting
Filter
Pagination
Loader
Use memo
Use callback
Virtualized

Basic dynamic data table
Flexible to Customize Column and Cell
Sorting Feature
Single Select Radio Feature
Multi Select Checkbox
In Code Sandbox

Desktop and Mobile View
Unit Testing
Technical Document

Done - StoryBook

Test Reference:
https://github.com/ashrays30/SampleTable
https://github.com/arianshi/singtel-next
Good Table Library - https://habx.github.io/ui-table

<ResponsiveUiTable
  columns=[{
    label: "Operator",
    type: "String",
    sortable: false,
  }]
  data=[{

  }]
  noDataComponent={() => <span>No data</span>}
/>


@media only screen and (max-width: 760px),
  (min-device-width: 768px) and (max-device-width: 1024px) {


TableHeader
TableBody
SingleSelectionCell
MultiSelectionCell

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};

Testing

npm install --save-dev @testing-library/react @testing-library/jest-dom

npm install --save-dev jest jest-environment-jsdom

jest.config.js
module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ['src/**/*.{js,jsx}'],
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
}

import '@testing-library/jest-dom'

optional
npm install --save-dev eslint-plugin-jest


eslintrc.json

{
    "env": {
        "browser": true,
        "es2021": true,
        "jest/globals": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:jest/recommended",
        "airbnb",
        "prettier"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["react", "jest"],
    "rules": {
        "no-underscore-dangle": 0,
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "always",
                "jsx": "always"
            }
        ]
    }
}

package.json

scripts:{
... //scripts you already have
test: "jest",
coverage: "jest --coverage"
}


/* Rectangle */

width: 211px;
height: 1px;

background: #E1E1E1;
border-radius: 1px;

/* Inside auto layout */
flex: none;
order: 1;
align-self: stretch;
flex-grow: 0;



+1-669-261-2181