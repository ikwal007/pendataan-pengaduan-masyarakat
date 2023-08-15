import { useEffect, useState } from 'react';
import axios from 'axios';

const useDeviceStatus = () => {
  const [status, setStatus] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDeviceStatus = async () => {
      try {
        const response = await axios.get('https://api.fonnte.com/device');
        const { status } = response.data;
        setStatus(status);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch device status');
        setLoading(false);
      }
    };

    fetchDeviceStatus();

    const interval = setInterval(fetchDeviceStatus, 5000);

    return () => clearInterval(interval);
  }, []);

  return { status, isLoading, error };
};

export default useDeviceStatus;
