import { render, screen } from '@testing-library/react';
import React from 'react';
import ResponsiveUiTable from '../src/components/ResponsiveUiTable';

describe('ResponsiveUiTable tests', () => {
    it('should contains the heading 1', () => {
    render(<ResponsiveUiTable noRowDataComponent={(<span>No data!</span>)} />);
        const heading = screen.getByText(/No data/i);
        expect(heading).toBeInTheDocument()
    });
});