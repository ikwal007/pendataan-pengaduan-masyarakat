import { useEffect, useState } from 'react';
import axios from 'axios';

const useQRCode = () => {
  const [qrCode, setQRCode] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const response = await axios.post('/api/generate-qr', {
          headers: {
            Authorization: 'TOKEN',
          },
        });

        const { url } = response.data;

        setQRCode(url);
        setLoading(false);
      } catch (error) {
        setError('Failed to generate QR code');
        setLoading(false);
      }
    };

    generateQRCode();
  }, []);

  return { qrCode, isLoading, error };
};

export default useQRCode;
