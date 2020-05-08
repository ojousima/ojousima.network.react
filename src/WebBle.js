/**
 * @file WebBle Web Bluetooth Scan for nearby RuuviTags
 * @author CRE template
 */
import React, {useState} from 'react';
import PropTypes from 'prop-types';

/**
 * @brief Log event in program.
 *
 * @param {string} message Message to log.
 */
function log(message) {
  console.log(message);
}

/**
 * @brief Start scanning for devices which advertise name with prefix "Ruuvi"
 *
 * Scans for 10 seconds for nearby RuuviDevices. Passes array of matches to
 * given callback function.
 *
 * @param {function} onReady Gets called with array of LEScan events after
 *                           timeout.
 */
async function onButtonClick(onReady) {
  const filters = [];

  const filterNamePrefix = 'Ruuvi';
  filters.push({namePrefix: filterNamePrefix});

  const options = {};
  options.filters = filters;
  const results = [];

  try {
    log('Requesting Bluetooth Scan with options: ' + JSON.stringify(options));
    const scan = await navigator.bluetooth.requestLEScan(options);

    log('Scan started with:');
    log(' acceptAllAdvertisements: ' + scan.acceptAllAdvertisements);
    log(' active: ' + scan.active);
    log(' keepRepeatedDevices: ' + scan.keepRepeatedDevices);
    log(' filters: ' + JSON.stringify(scan.filters));

    navigator.bluetooth.addEventListener('advertisementreceived', (event) => {
      log('Advertisement received.');
      log('  Device Name: ' + event.device.name);
      log('  Device ID: ' + event.device.id);
      log('  RSSI: ' + event.rssi);
      log('  TX Power: ' + event.txPower);
      log('  UUIDs: ' + event.uuids);
      results.push(event);
    });

    setTimeout(stopScan, 10000);
    /** @brief Stop BLE scanning and call teh callback with array of results. */
    function stopScan() {
      log('Stopping scan...');
      scan.stop();
      log('Stopped.  scan.active = ' + scan.active);
      onReady(results);
    }
  } catch (error) {
    log('Argh! ' + error);
  }
}

/**
 * @brief Scan for nearby RuuviTags
 *
 * @param {object} props Properties containing data-testid string.
 * @return {string} HTML list of nearby RuuviTag mac addresses
 */
function WebBle(props) {
  // Declare a new state variable, which we'll call "count"
  const [tags, setTags] = useState([]);

  return (
    <div className="Scan" data-testid={props['data-testid']}>
      <button id="button-scan" onClick={() => onButtonClick(setTags)}>
        Scan for RuuviTags
      </button>
      <p>Found {tags.length} RuuviTags</p>
    </div>
  );
}

WebBle.propTypes = {
  'data-testid': PropTypes.string,
};

export default WebBle;
