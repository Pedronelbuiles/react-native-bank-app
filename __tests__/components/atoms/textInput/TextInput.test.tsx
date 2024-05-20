import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {InputText} from '../../../../src/presentation/components/atoms/textInput/TextInput';

describe('Name of the group', () => {
  const functionMock = jest.fn();

  it('should render input correctly', () => {
    render(
      <InputText
        onChangeInput={functionMock}
        value="input text"
        error={false}
      />,
    );
    const printScreen = screen.getByTestId(/input text/i);
    expect(printScreen).toBeTruthy();
  });
});
