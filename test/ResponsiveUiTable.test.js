import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import React from 'react';
import ResponsiveUiTable from '../src/components/ResponsiveUiTable';

describe('ResponsiveUiTable tests', () => {
    it('should return No data!', () => {
        render(<ResponsiveUiTable noRowDataComponent={(<span>No data!</span>)} />);
        const noDataMessage = screen.getByText(/No data!/i);
        expect(noDataMessage).toBeInTheDocument();
    });

    it('should return Technical Error with no props supplied', () => {
        render(<ResponsiveUiTable />);
        const noDataMessage = screen.getByText(/Technical Error/i);
        expect(noDataMessage).toBeInTheDocument();
    });

    it('should return multi select records with valid data', () => {
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
          }]
          
          const rowsData = [{
            id: 1,
            name: 'Mavis Chen',
            mobile: '8899-7654',
          }, {
            id: 2,
            name: 'Rodney Artichoke',
            mobile: '9988-7676',
          }, {
            id: 3,
            name: 'Valentino Morose',
            mobile: '7900-7654',
          }, {
            id: 4,
            name: 'Eric Widget',
            mobile: '5899-7654',
          }]

        render(<ResponsiveUiTable columnDefs={columnDefs} rowsData={rowsData} rowIdName="id" rowsSelectionType="multiple" />);
        const firstRecord = screen.getByText(/Mavis Chen/i);
        expect(firstRecord).toBeInTheDocument();
        const secondRecord = screen.getByText(/Valentino Morose/i);
        expect(secondRecord).toBeInTheDocument();
        const thirdRecord = screen.getByText(/Eric Widget/i);
        expect(thirdRecord).toBeInTheDocument();
    });


    it('should return single select records with valid data', () => {
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
          }]
          
          const rowsData = [{
            id: 1,
            name: 'Mavis Chen',
            mobile: '8899-7654',
          }, {
            id: 2,
            name: 'Rodney Artichoke',
            mobile: '9988-7676',
          }, {
            id: 3,
            name: 'Valentino Morose',
            mobile: '7900-7654',
          }, {
            id: 4,
            name: 'Eric Widget',
            mobile: '5899-7654',
          }]

        render(<ResponsiveUiTable columnDefs={columnDefs} rowsData={rowsData} rowIdName="id" rowsSelectionType="single" />);
        const firstRecord = screen.getByText(/Mavis Chen/i);
        expect(firstRecord).toBeInTheDocument();
        const secondRecord = screen.getByText(/Valentino Morose/i);
        expect(secondRecord).toBeInTheDocument();
        const thirdRecord = screen.getByText(/Eric Widget/i);
        expect(thirdRecord).toBeInTheDocument();
    });
});