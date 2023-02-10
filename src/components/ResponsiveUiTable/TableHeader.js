import React, { useContext } from 'react';
import { TableContext } from './context';
import SortAscendingIcon from '../../static/images/sort-asc.svg';
import { sortData } from '../../utils/table'

export default function TableHeader() {
  const {
    rowsData,
    sortOption,
    updateRowsData,
    updateSortOptions,
    rowsSelectionType,
    columnDefs
  } = useContext(TableContext)

  const columns = [{
    label: '',
    columnId: 'id',
    type: 'string',
  },
  ...columnDefs,
  ]

  return (
    <div className="Rtable-row Rtable-row--head header">
      {columns.map(column => {
        const { columnId, label } = column;
        const classNames = `Rtable-cell column-heading ${columnId}-cell`

        if (
          columnId === 'id' &&
          rowsSelectionType === ''
        ) {
          return null
        }

        return (
          <div key={columnId} className={classNames} onClick={() => {
            const { by, order } = sortOption || {}
            let sortFieldName = by
            let sortFieldOrder = order

            if (columnId === by) {
              if (order === 'asc') {
                sortFieldOrder = 'desc'
              } else {
                sortFieldOrder = 'asc'
              }
            } else {
              sortFieldName = columnId
              sortFieldOrder = 'asc'
            }

            const sortedData = sortData(
              rowsData,
              columnId,
              sortFieldOrder
            )

            updateRowsData(sortedData)
            updateSortOptions({
              sorting: '',
              by: sortFieldName,
              order: sortFieldOrder
            })

          }}>
            {label}
            {(sortOption?.by === columnId) && (<img
              src={SortAscendingIcon}
              style={{ height: 10, width: 15 }}
              alt="website logo"
            />)}
          </div>
        )
      })}
    </div>
  )
}