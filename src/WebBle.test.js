'use strict';
import React from 'react';
import {
  fireEvent,
  render,
  waitForElement,
  within,
} from '@testing-library/react';
import {act} from 'react-dom/test-utils';
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
  const {getByTestId, getByText} = render(<WebBle data-testid='webble'/>);
  mockBluetooth.requestLEScan.mockResolvedValueOnce(mockScan);

  fireEvent.click(getByText('Scan for RuuviTags'));
  await Promise.resolve(); // Run any pending jobs in the PromiseJobs
  act(() => {
    jest.runAllTimers();
  });
  // Bug in Jest 24 / Node 12? Fails.
  await waitForElement(() => getByTestId('webble'));
  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 10000);
  act(() => {
    jest.runAllTimers();
  });
  expect(mockScan.stop).toHaveBeenCalledTimes(1);
});
