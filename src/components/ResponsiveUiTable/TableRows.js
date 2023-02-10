import React, { useState, useContext } from 'react';
import Checkbox from '../Checkbox';
import RadioButton from '../RadioButton/RadioButton';

import { TableContext } from './context';

export default function TableRows() {
  const [canHighlight, highlightRow] = useState(false)
  const {
    rowsSelectionType,
    columnDefs,
    rowsData,
    onRowSelection,
    selectedRowsIndex,
    updateSelectedRowsIndex
  } = useContext(TableContext)

  const columns = [{
    label: '',
    columnId: 'id',
    type: 'string',
  }, ...columnDefs]

  return (
    <>
      {rowsData.map(row => {
        const rowClassNames = `Rtable-row ${selectedRowsIndex.includes(row.id) ? 'selected-cell' : ''}`
        return (
          <div key={`row-${row.id}`} className={rowClassNames}>
            {columns.map(column => {
              const { columnId, label, type } = column;
              const rowValue = row[columnId] || ''
              const classNames = `Rtable-cell ${columnId}-cell ${columnId}-${type}-cell`

              if (columnId === 'id') {
                if (!['single', 'multiple'].includes(rowsSelectionType)) {
                  return null
                }

                return (
                  <div key={columnId} className={classNames}>
                    <div className="Rtable-cell--content date-content">
                      {rowsSelectionType === 'single' && (<RadioButton name="selection" onSelect={() => {
                        updateSelectedRowsIndex([row?.id])
                        onRowSelection(row);
                      }} />)}
                      {rowsSelectionType === 'multiple' && (<Checkbox name="selection" onSelect={(e) => {
                        if (e.target.checked) {
                          const selectedRowIndexSet = new Set([row?.id, ...selectedRowsIndex])
                          updateSelectedRowsIndex(
                            Array.from(selectedRowIndexSet.values())
                          )
                        } else {
                          const unCheckedRowId = selectedRowsIndex.indexOf(row?.id)
                          selectedRowsIndex.splice(unCheckedRowId, 1)
                          updateSelectedRowsIndex(
                            [...selectedRowsIndex]
                          )
                        }

                        onRowSelection(row);
                      }} />)}                      
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