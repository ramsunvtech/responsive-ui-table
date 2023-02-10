import React from 'react';

import ResponsiveUiTable from '../components/ResponsiveUiTable';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'responsive/Table',
  component: ResponsiveUiTable,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
};

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
  mobile: '8899 7654',
  expiry: '01/10/2022',
  penalty: '600',
}, {
  id: 2,
  name: 'Rodney Artichoke',
  mobile: '9988 7676',
  expiry: '01/12/2022',
  penalty: '600',
}, {
  id: 3,
  name: 'Valentino Morose',
  mobile: '8900 7654',
  expiry: '01/01/2022',
  penalty: '600',
}, {
  id: 4,
  name: 'Eric Widget',
  mobile: '8899 7654',
  expiry: '01/01/2022',
  penalty: '600',
}]

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ResponsiveUiTable {...args} />;

export const BasicTable = Template.bind({});
BasicTable.args = {
  columnDefs,
  rowsData,
};

export const NoDataTable = Template.bind({});
NoDataTable.args = {
  columnDefs: [],
  rowsData: [],
  noRowDataComponent: (<span>No data!</span>)
};

export const TableWithSortableRows = Template.bind({});
TableWithSortableRows.args = {
  columnDefs,
  rowsData,
};

export const TableWithSingleSelection = Template.bind({});
TableWithSingleSelection.args = {
  columnDefs,
  rowsData,
  rowsSelectionType: "single"
};

export const MultipleSelections = Template.bind({});
MultipleSelections.args = {
  columnDefs,
  rowsData,
  rowsSelectionType: "multiple"
};
