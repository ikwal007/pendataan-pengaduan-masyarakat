import React, { useState } from 'react';
import useDeviceStatus from '@/Hooks/useDeviceStatus';
import useQRCode from '@/Hooks/useQRCode';
import ShowDetail from '@/Components/ShowDetails/ShowDetail';
import Seo from '@/Components/Seo/Seo';
import LogedLayouts from '@/Layouts/loged-layouts';

const ChatWhatsapp = () => {
  const { name, device, deviceStatus, expired, quota, status, statusLoading, statusError } = useDeviceStatus();
  const [getQrCode, setGetQrCode] = useState(true);
  const { qrCode, qrLoading, qrError } = useQRCode(getQrCode || deviceStatus === 'disconnect');

  const renderQrCode = () => {
    if (getQrCode) return null;
    if (qrLoading) return <p>Loading QR code...</p>;
    if (qrError) return <p>{qrError}</p>;
    if (qrCode) return <img src={`data:image/png;base64,${qrCode}`} alt='QR Code' />;
    return null;
  };

  const renderDetail = (label, value) => (
    <ShowDetail.Bi>
      <ShowDetail.Dt children={label} />
      <ShowDetail.Dd children={statusLoading ? <p>Loading device status...</p> : statusError ? <p>{statusError}</p> : <p>{value}</p>} />
    </ShowDetail.Bi>
  );

  return (
    <section className='relative box-border p-5 md:py-20 md:px-10 lg:py-0 w-full'>
      <div className='flex flex-wrap p-2 md:p-5 w-full bg-base-200 md:justify-between'>
        <div className='overflow-x-auto w-full bg-white p-3 rounded-xl'>
          <ShowDetail patch='sada'>
            <ShowDetail.Head>
              <ShowDetail.H3 children='Informasi Data Pemohon' />
              <ShowDetail.P children='Detail pemohon dan laporan' />
            </ShowDetail.Head>
            <ShowDetail.Body>
              {deviceStatus === 'disconnect' && (
                <ShowDetail.Bi>
                  <ShowDetail.Dt children={<button className='btn btn-outline btn-success' onClick={() => setGetQrCode(!getQrCode)}>Get Qr Code</button>} />
                  <ShowDetail.Dd children={renderQrCode()} />
                </ShowDetail.Bi>
              )}

              {deviceStatus !== 'disconnect' && renderDetail('Nama', name)}

              {deviceStatus !== 'disconnect' && renderDetail('Device', device)}

              {deviceStatus !== 'disconnect' && renderDetail('Device Status', deviceStatus)}

              {deviceStatus !== 'disconnect' && renderDetail('Expired', expired)}

              {deviceStatus !== 'disconnect' && renderDetail('Quota Chat', quota)}
            </ShowDetail.Body>
          </ShowDetail>
        </div>
      </div>
    </section>
  );
};

ChatWhatsapp.layout = page => (
  <LogedLayouts>
    <Seo title='Dashboard Super Admin' />
    {page}
  </LogedLayouts>
);

export default ChatWhatsapp;
