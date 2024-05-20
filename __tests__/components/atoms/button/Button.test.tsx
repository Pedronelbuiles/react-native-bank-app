import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {Button} from '../../../../src/presentation/components/atoms/button/Button';

describe('Testing button component', () => {
  const funtionMock = jest.fn();

  it('should render button correctly', () => {
    render(<Button title="Button Test" onPress={funtionMock} />);
    const printScreen = screen.getByText(/button test/i);
    expect(printScreen).toBeTruthy();
  });

  it('should be clicked button', async () => {
    render(<Button title="Button Test Click" onPress={funtionMock} />);
    fireEvent.press(screen.getByText(/button test click/i));
    expect(funtionMock).toHaveBeenCalled();
  });

  it('should show danger button', async () => {
    render(
      <Button title="Button Test Click" onPress={funtionMock} type="danger" />,
    );
    const button = await screen.findByText(/button test click/i);
    expect(button).toBeTruthy();
  });

  it('should show primary button', async () => {
    render(
      <Button title="Button Test Click" onPress={funtionMock} type="primary" />,
    );
    const button = await screen.findByText(/button test click/i);
    expect(button).toBeTruthy();
  });
});
