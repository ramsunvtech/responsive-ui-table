import React, { useContext } from 'react';
import { TableContext } from './context';
import SortAscendingIcon from '../../static/images/sort-asc.svg';
import SortDescendingIcon from '../../static/images/sort-desc.svg';
import { sortData } from '../../utils/table'
import Checkbox from '../Checkbox';

export default function TableHeader() {
  const {
    pagePerRecords,
    rowsData,
    getSelectedRowsIndex,
    sortOption,
    updateRowsData,
    updateSortOptions,
    rowsSelectionType,
    columnDefs,
    updateTableSelection
  } = useContext(TableContext)

  const columns = [{
    label: '',
    columnId: 'id',
    type: 'string',
  },
  ...columnDefs,
  ]

  const { order } = sortOption || {}
  let sortingIcon = SortAscendingIcon

  if (order == 'asc') {
    sortingIcon = SortAscendingIcon
  } else if (order == 'desc') {
    sortingIcon = SortDescendingIcon
  }

  const sortColumn = (columnId) => {
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
  }

  let selectedRowIndex = []
  if (pagePerRecords > rowsData.length) {
    selectedRowIndex = rowsData.map(row => row.id)
  } else if(pagePerRecords < rowsData.length) {
    selectedRowIndex = Array.from(Array(pagePerRecords).keys()).map(index => rowsData[index].id)
  }

  const isAllRowsSelected = (getSelectedRowsIndex()?.length > 0 && getSelectedRowsIndex()?.length === selectedRowIndex?.length)

  return (
    <div className="Rtable-row Rtable-row--head header">
      {columns.map(column => {
        const { columnId, label } = column;
        const classNames = `Rtable-cell column-heading ${columnId}-cell`

        return (
          <div key={columnId} className={classNames}>
            {columnId === 'id' && rowsSelectionType === 'multiple' && (<Checkbox name="selection" checked={isAllRowsSelected} onSelect={(e) => {
              updateTableSelection(
                e.target.checked
              )
            }} />)}
            {columnId !== 'id' && (<span onClick={() => sortColumn(columnId)}>{label}</span>)}
            {columnId !== 'id' && (sortOption?.by === columnId) && (<img
              src={sortingIcon}
              style={{ height: 10, width: 15 }}
              alt="sort"
            />)}
          </div>
        )
      })}
    </div>
  )
}