import { useEffect, useState } from 'react';
import axios from 'axios';

const useQRCode = () => {
  const [qrCode, setQRCode] = useState('');
  const [qrLoading, setQrLoading] = useState(true);
  const [qrError, setQrError] = useState('');

  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const response = await axios.post(
          'https://api.fonnte.com/qr',
          {},
          {
            headers: {
              Authorization: 'Dg9BpT1Tder@_ZeBfPJa',
            },
          }
        );

        const { url } = response.data;

        setQRCode(url);
        setQrLoading(false);
      } catch (error) {
        setQrError('Failed to generate QR code');
        setQrLoading(false);
      }
    };

    generateQRCode();
  }, []);

  return { qrCode, qrLoading, qrError };
};

export default useQRCode;
