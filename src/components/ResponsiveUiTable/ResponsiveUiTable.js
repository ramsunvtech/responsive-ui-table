import React, { useState, useReducer } from 'react'
import { TableContext } from './context';
import TableHeader from './TableHeader'
import TableRows from './TableRows'

import './table.css';

export default function ResponsiveUiTable(props) {
  const {
    id,
    rowsData: initialRowsData,
    columnDefs,
    rowsSelectionType,
    sorting,
    onRowSelection,
    noRowDataComponent = null
  } = props;
  const [rowsData, updateRowsData] = useState(initialRowsData)
  const [selectedRowsIndex, updateSelectedRowsIndex] = useState([])
  const [sortOption, updateSortOptions] = useState({
    sorting,
    by: 'id',
    order: 'asc'
  })

  if (rowsData.length === 0 && noRowDataComponent) {
    return noRowDataComponent
  }

  const tableContext = {
    id,
    columnDefs,
    rowsSelectionType,
    sortOption,
    rowsData,
    selectedRowsIndex,
    onRowSelection,
    updateRowsData,
    updateSortOptions,
    updateSelectedRowsIndex
  }

  return (
    <TableContext.Provider value={tableContext}>
      <div className="wrapper" id={id} data-testid={id}>
        <div className="Rtable Rtable--5cols Rtable--collapse">
          <TableHeader />
          <TableRows />
        </div>
      </div>
    </TableContext.Provider>
  )
}