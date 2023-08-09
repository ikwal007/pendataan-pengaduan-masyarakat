import Seo from '@/Components/Seo/Seo';
import ShowDetail from '@/Components/ShowDetails/ShowDetail';
import LogedLayouts from '@/Layouts/loged-layouts';
import { usePage } from '@inertiajs/react';
import React, { useState } from 'react';

const Show = () => {
  const { auth } = usePage().props;
  let url = '';

  if (auth.user.role == 'Super_Admin') {
    url = '/super-admin/dashboard';
  } else if (auth.user.role == 'Pelayanan_Publik') {
    url = '/pelayanan-publik/dashboard';
  } else if (auth.user.role == 'Seksi') {
    url = '/seksi/dashboard';
  } else if (auth.user.role == 'Masyarakat') {
    url = '/masyarakat/dashboard';
  }
  return (
    <section className='relative box-border p-5 md:py-20 md:px-10 lg:py-0 w-full'>
      <div className='flex flex-wrap p-2 md:p-5 w-full bg-base-200 md:justify-between'>
        <div className='overflow-x-auto w-full'>
          <ShowDetail patch={url}>
            <ShowDetail.Head>
              <ShowDetail.H3 children={`Informasi Data Pemohon`} />
              <ShowDetail.P children={`Detail pemohon dan laporan`} />
            </ShowDetail.Head>
            <ShowDetail.Body>
              {auth !== null ? (
                <ShowDetail.Bi>
                  <ShowDetail.Dt children={`Nama`} />
                  <ShowDetail.Dd children={auth.user.name} />
                </ShowDetail.Bi>
              ) : null}
              {auth.user.nik !== null ? (
                <ShowDetail.Bi>
                  <ShowDetail.Dt children={`Nik`} />
                  <ShowDetail.Dd children={auth.user.nik} />
                </ShowDetail.Bi>
              ) : null}
              {auth ? (
                <ShowDetail.Bi>
                  <ShowDetail.Dt children={`Email`} />
                  <ShowDetail.Dd children={auth.user.email} />
                </ShowDetail.Bi>
              ) : null}
            </ShowDetail.Body>
          </ShowDetail>
        </div>
      </div>
    </section>
  );
};

Show.layout = page => (
  <LogedLayouts title={`Show Detail Masyarakat`}>
    <Seo title={`Show Detail Masyarakat`} />
    {page}
  </LogedLayouts>
);

export default Show;
