'use strict';
import React from 'react';
import {fireEvent, render, within} from '@testing-library/react';
import WebBle from './WebBle';
jest.useFakeTimers();

const mockBluetooth = {
  requestLEScan: jest.fn(),
  addEventListener: jest.fn(),
};

const mockScan = {
  acceptAllAdvertisements: false,
  active: true,
  keepRepeatedDevices: false,
  filters: {namePrefix: 'Ruuvi'},
  stop: jest.fn(),
};

global.navigator.bluetooth = mockBluetooth;

test('renders RuuviTag scan button', () => {
  const {getByTestId} = render(<WebBle data-testid='webble'/>);
  const webBle = getByTestId('webble');
  const buttons = within(webBle).getAllByText('Scan for RuuviTags');
  expect(buttons.length).toBe(1);
});

test('RuuviTag scans for 10 seconds', async () => {
  const {getByText} = render(<WebBle data-testid='webble'/>);
  mockBluetooth.requestLEScan.mockResolvedValueOnce(mockScan);
  fireEvent.click(getByText('Scan for RuuviTags'));
  await Promise.resolve(); // Run any pending jobs in the PromiseJobs.
  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
});
