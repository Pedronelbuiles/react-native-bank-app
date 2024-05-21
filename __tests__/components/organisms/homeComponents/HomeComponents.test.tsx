import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {HomeComponents} from '../../../../src/presentation/components/organisms/homeComponents/Homecomponentes';

describe('Testing Home Components', () => {
  it('should render home components recently', () => {
    render(<HomeComponents />);
    const printScreen = screen.getByTestId(/HomeComponentsTestId/i);
    expect(printScreen).toBeTruthy();
  });
});
