import React from 'react';
import {fireEvent, render} from '@testing-library/react-native';
import Modal from '../../components/Modal';

const mocketSetModal = jest.fn();

jest.mock('../../hooks/indicators', () => ({
  useIndicators: () => ({
    setModal: mocketSetModal,
  }),
}));

describe('Modal Component', () => {
  it('should render modal', () => {
    const {getByTestId, getByText} = render(<Modal message="Modal for test" />);

    const modal = getByTestId('modal');
    const text = getByText('Modal for test');

    expect(modal).toBeTruthy();
    expect(text.props.children).toEqual('Modal for test');
  });

  it('should close modal when click on button', () => {
    const {getByTestId} = render(<Modal message="Modal for test" />);

    const button = getByTestId('button');
    fireEvent.press(button);

    expect(mocketSetModal).toHaveBeenCalledWith({open: false});
  });
});
