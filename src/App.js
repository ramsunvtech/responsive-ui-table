import React from 'react'

// Components.
import { ErrorHandler } from '@responsive-ui-table/components'
import ResponsiveUiTable from '@responsive-ui-table/components/ResponsiveUiTable'
import RadioButton from './components/RadioButton/RadioButton'

const columnDefs = [{
  label: 'Name',
  columnId: 'name',
  type: 'string',
  sortable: true,
}, {
  label: 'Mobile',
  columnId: 'mobile',
  type: 'number',
  sortable: true,
}, {
  label: 'Expiry',
  columnId: 'expiry',
  type: 'date',
  sortable: true,
}, {
  label: 'Penalty',
  columnId: 'penalty',
  type: 'currency',
  sortable: true,
}]

const rowsData = [{
  id: 1,
  name: 'Mavis Chen',
  mobile: '8899-7654',
  expiry: '01/10/2022',
  penalty: '$520',
}, {
  id: 2,
  name: 'Rodney Artichoke',
  mobile: '9988-7676',
  expiry: '01/12/2022',
  penalty: '$700',
}, {
  id: 3,
  name: 'Valentino Morose',
  mobile: '7900-7654',
  expiry: '01/01/2022',
  penalty: '$700',
}, {
  id: 4,
  name: 'Eric Widget',
  mobile: '5899-7654',
  expiry: '01/01/2022',
  penalty: '$100',
}]

function App() {
  return (
    <>
      <ErrorHandler>
        <h1>Responsive UI Table</h1>
        <ResponsiveUiTable
          id="person-list"
          columnDefs={columnDefs}
          rowsData={rowsData}
          rowIdName="id"
          rowsSelectionType="single"
          singleColumnLayoutTitle="Contract details"
          pagePerRecords={10}
          noRowDataComponent={<span>No data!</span>}
          sorting
          onRowSelection={(row) => {
            // console.log('selected row', row)
          }}
        />
      </ErrorHandler>
    </>
  )
}

export default App
