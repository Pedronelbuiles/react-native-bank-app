import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {it} from '@jest/globals';
import {ArrowIcon} from '../../../../src/presentation/components/atoms/arrowIcon/ArrowIcon';

describe('Testing arrow icon', () => {
  it('should render icon correctly', () => {
    render(<ArrowIcon />);
    const prinScreen = screen.getByTestId('arrowIcon');
    expect(prinScreen).toBeTruthy();
  });
});
