import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {SearchInput} from '../../../../src/presentation/components/molecules/searchInput/SearchInput';

describe('Testing Search Input Test', () => {
  it('should render search component recently', () => {
    render(<SearchInput />);
    const printScreen = screen.getByTestId(/SearchInputTestId/i);
    expect(printScreen).toBeTruthy();
  });

  it('should render Input Text', () => {
    render(<SearchInput />);
    const printScreen = screen.getByTestId(/input text/i);
    expect(printScreen).toBeTruthy();
  });
});
