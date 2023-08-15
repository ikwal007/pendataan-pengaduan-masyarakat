import { useEffect, useState } from 'react';
import axios from 'axios';

const useDeviceStatus = () => {
  const [status, setStatus] = useState('');
  const [attachment, setAttachment] = useState('');
  const [device, setDevice] = useState('');
  const [deviceStatus, setDeviceStatus] = useState('');
  const [expired, setExpired] = useState('');
  const [name, setName] = useState('');
  const [quota, setQuota] = useState('');
  const [statusLoading, setStatusLoading] = useState(true);
  const [statusError, setStatusError] = useState('');

  useEffect(() => {
    const fetchDeviceStatus = async () => {
      try {
        const response = await axios.post(
          'https://api.fonnte.com/device',
          {},
          {
            headers: {
              Authorization: 'Dg9BpT1Tder@_ZeBfPJa',
            },
          }
        );
        const {
          device,
          device_status,
          status,
          attachment,
          expired,
          name,
          quota,
        } = response.data;
        setStatus(status);
        setAttachment(attachment);
        setDevice(device);
        setDeviceStatus(device_status);
        setExpired(expired);
        setName(name);
        setQuota(quota);
        setStatusLoading(false);
      } catch (error) {
        setStatusError('Failed to fetch device status');
        setLoading(false);
      }
    };

    fetchDeviceStatus();

    const interval = setInterval(fetchDeviceStatus, 5000);

    return () => clearInterval(interval);
  }, []);

  return {
    attachment,
    device,
    deviceStatus,
    expired,
    name,
    quota,
    status,
    statusLoading,
    statusError,
  };
};

export default useDeviceStatus;
