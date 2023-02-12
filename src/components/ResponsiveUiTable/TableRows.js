import React, { useContext, useRef, useCallback, createRef } from 'react';
import Checkbox from '../Checkbox';
import RadioButton from '../RadioButton/RadioButton';

import { TableContext } from './context';

export default function TableRows() {
  const {
    rowsSelectionType,
    columnDefs,
    rowsData,
    onRowSelection,
    getSelectedRowsIndex,
    updateSelectedRowsIndex
  } = useContext(TableContext);
  const lineRefs = useRef([]);

  const columns = [{
    label: '',
    columnId: 'id',
    type: 'string',
  }, ...columnDefs]

  const updateSelectedSingleRow = (rowId) => {
    updateSelectedRowsIndex(rowId)
  }

  const updateSelectedMultipleRows = (rowId) => {
    updateSelectedRowsIndex(rowId)
  }

  const updateDeselectedRow = (rowId) => {
    updateSelectedRowsIndex(rowId, false)
  }

  const updateSelectedRow = (row, isSelected) => {
    const { id: rowId } = row
    if (rowsSelectionType === 'single') {
      updateSelectedSingleRow(rowId)
    } else if (rowsSelectionType === 'multiple') {
      const updateSelectedRowsMethod = (isSelected) ? updateSelectedMultipleRows : updateDeselectedRow;
      updateSelectedRowsMethod(rowId);
    }
    onRowSelection(row);
  }

  return (
    <>
      {rowsData.map((row, rowIndex) => {
        lineRefs.current[rowIndex] = lineRefs.current[rowIndex] || createRef()
        const { id: rowId } = row;
        const rowClassNames = `Rtable-row row-data ${getSelectedRowsIndex().includes(rowId) ? 'selected-cell' : ''}`
        const isRowSelected = getSelectedRowsIndex().includes(rowId)

        return (
          <div key={`row-${rowId}`} className={rowClassNames} onClick={() => {
            const isChecked = lineRefs.current[rowIndex].current.checked
            updateSelectedRow(row, !isChecked)
          }}>
            {columns.map(column => {
              const { columnId, label, type } = column;
              const rowValue = row[columnId] || ''
              const classNames = `Rtable-cell ${columnId}-cell ${columnId}-${type}-cell`

              if (columnId === 'id') {
                if (!rowsSelectionType) {
                  return null
                }

                return (
                  <div key={columnId} className={classNames}>
                    <div className="Rtable-cell--content date-content">
                      {rowsSelectionType === 'single' && (<RadioButton innerRef={lineRefs.current[rowIndex]} key={`radio-${columnId}`} name="selection" checked={isRowSelected} />)}
                      {rowsSelectionType === 'multiple' && (<Checkbox innerRef={lineRefs.current[rowIndex]} key={`checkbox-${columnId}`} name="selection" checked={isRowSelected} />)}
                    </div>
                  </div>
                )
              }

              return (
                <div key={columnId} className={classNames}>
                  <div className="Rtable-cell--heading">{label}</div>
                  <div className="Rtable-cell--content date-content">{rowValue}</div>
                </div>
              )
            })}
          </div>
        )
      })}
    </>
  )
}