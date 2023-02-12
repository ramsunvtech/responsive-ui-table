import React, { useState } from 'react'
import { TableContext } from './context';
import TableHeader from './TableHeader'
import TableRows from './TableRows'

import './table.css';

export default function ResponsiveUiTable(props) {
  const {
    id,
    rowIdName,
    singleColumnLayoutTitle,
    rowsData: initialRowsData,
    columnDefs,
    pagePerRecords,
    rowsSelectionType,
    sorting,
    onRowSelection,
    noRowDataComponent = null
  } = props;
  const [rowsData, updateRowsData] = useState(initialRowsData)
  const [selectedRowsIndex, updateSelectedRowsIndexState] = useState([])
  const [sortOption, updateSortOptions] = useState({
    sorting,
    by: rowIdName,
    order: 'asc'
  })

  if (rowsData.length === 0 && noRowDataComponent) {
    return noRowDataComponent
  }

  const getSelectedRowsIndex = () => {
    let currentRowIndexes = []
    if (selectedRowsIndex) {
      currentRowIndexes = [...new Set(selectedRowsIndex)]
    }

    return currentRowIndexes
  }

  const tableContext = {
    id,
    singleColumnLayoutTitle,
    columnDefs,
    rowsSelectionType,
    pagePerRecords,
    sortOption,
    rowsData,
    getSelectedRowsIndex,
    onRowSelection,
    updateRowsData,
    updateSortOptions,
    updateTableSelection: (isSelected) => {
      let selectedRowIndex = []
      if (pagePerRecords > rowsData.length) {
        selectedRowIndex = rowsData.map(row => row[rowIdName])
      } else if(pagePerRecords < rowsData.length) {
        selectedRowIndex = Array.from(Array(pagePerRecords).keys()).map(index => rowsData[index][rowIdName])
      }

      updateSelectedRowsIndexState(
        ...(
          isSelected ? [selectedRowIndex] : []
        )
      )
    },
    updateSelectedRowsIndex: (newRowIndex, selectRow = true) => {
      if (rowsSelectionType === 'single') {
        updateSelectedRowsIndexState([newRowIndex])
        return;
      }

      if (selectRow) {
        updateSelectedRowsIndexState([
          ...getSelectedRowsIndex(),
          newRowIndex
        ]);
      } else {
        const currentRowIndexes = getSelectedRowsIndex()
        const unCheckedRowIndex = currentRowIndexes.indexOf(newRowIndex);
        currentRowIndexes.splice(unCheckedRowIndex, 1);
        updateSelectedRowsIndexState([
          currentRowIndexes
        ])
      }
    }
  }

  const columnClassName = (columnDefs?.length > 3) ? 'maxi-columns' : 'mini-columns';
  const tableClassNames = `Rtable ${columnClassName} Rtable--5cols Rtable--collapse`;

  return (
    <TableContext.Provider value={tableContext}>
      <div className="wrapper" id={id} data-testid={id}>
        <div className={tableClassNames}>
          <TableHeader />
          <TableRows />
        </div>
      </div>
    </TableContext.Provider>
  )
}