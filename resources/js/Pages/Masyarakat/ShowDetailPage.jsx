import Seo from '@/Components/Seo/Seo';
import ShowDetail from '@/Components/ShowDetails/ShowDetail';
import LogedLayouts from '@/Layouts/loged-layouts';
import { usePage, router } from '@inertiajs/react';
import React from 'react';

const ShowDetailPage = () => {
  const { dataForShowDetail } = usePage().props;
  return (
    <>
      <section className='relative box-border p-5 md:py-20 md:px-10 lg:py-0 w-full'>
        <div className='flex flex-wrap p-2 md:p-5 w-full bg-base-200 md:justify-between'>
          <div className='overflow-x-auto w-full'>
            <ShowDetail patch={'/masyarakat/dashboard'}>
              <ShowDetail.Head>
                <ShowDetail.H3 children={`Informasi Data Pemohon`} />
                <ShowDetail.P children={`Detail pemohon dan laporan`} />
              </ShowDetail.Head>
              <ShowDetail.Body>
                {dataForShowDetail.nama_pemohon !== null ? (
                  <ShowDetail.Bi>
                    <ShowDetail.Dt children={`Nama Pemohon`} />
                    <ShowDetail.Dd children={dataForShowDetail.nama_pemohon} />
                  </ShowDetail.Bi>
                ) : null}
                {dataForShowDetail.nik !== null ? (
                  <ShowDetail.Bi>
                    <ShowDetail.Dt children={`Nik`} />
                    <ShowDetail.Dd children={dataForShowDetail.nik} />
                  </ShowDetail.Bi>
                ) : null}
                {dataForShowDetail.desa ? (
                  <ShowDetail.Bi>
                    <ShowDetail.Dt children={`Desa`} />
                    <ShowDetail.Dd
                      children={dataForShowDetail.desa.nama_desa}
                    />
                  </ShowDetail.Bi>
                ) : null}
                {dataForShowDetail.kecamatan ? (
                  <ShowDetail.Bi>
                    <ShowDetail.Dt children={`Kecamatan`} />
                    <ShowDetail.Dd
                      children={dataForShowDetail.kecamatan.nama_kecamatan}
                    />
                  </ShowDetail.Bi>
                ) : null}
                {dataForShowDetail.jenis_media_pengaduan
                  .jenis_media_pengaduan !== null ? (
                  <ShowDetail.Bi>
                    <ShowDetail.Dt children={`Jenis Media Pengaduan`} />
                    <ShowDetail.Dd
                      children={
                        dataForShowDetail.jenis_media_pengaduan
                          .nama_media_pengaduan
                      }
                    />
                  </ShowDetail.Bi>
                ) : null}
                {dataForShowDetail.jenis_sertifikat !== null ? (
                  <ShowDetail.Bi>
                    <ShowDetail.Dt children={`Jenis Sertifikat`} />
                    <ShowDetail.Dd
                      children={
                        dataForShowDetail.jenis_sertifikat.jenis_sertifikat
                      }
                    />
                  </ShowDetail.Bi>
                ) : null}
                {dataForShowDetail.no_hak !== null ? (
                  <ShowDetail.Bi>
                    <ShowDetail.Dt children={`no hak`} />
                    <ShowDetail.Dd children={dataForShowDetail.no_hak} />
                  </ShowDetail.Bi>
                ) : null}
                {dataForShowDetail.keterangan_pengaduan_pemohon !== null ? (
                  <ShowDetail.Bi>
                    <ShowDetail.Dt children={`Keterangan Permohonan`} />
                    <ShowDetail.Dd
                      children={dataForShowDetail.keterangan_pengaduan_pemohon}
                    />
                  </ShowDetail.Bi>
                ) : null}
                {dataForShowDetail.keterangan_pengaduan_pemohon !== null ? (
                  <ShowDetail.Bi>
                    <ShowDetail.Dt children={`Status Permohonan`} />
                    <ShowDetail.Dd
                      children={dataForShowDetail.status.status}
                    />
                  </ShowDetail.Bi>
                ) : null}
                {dataForShowDetail.penanganan.length > 0 ? (
                  <ShowDetail.Bi>
                    <ShowDetail.Dt children={`Penanganan`} />
                    <ShowDetail.Dd>
                      <ul
                        role='list'
                        className='divide-y divide-gray-100 rounded-md border border-gray-200'
                      >
                        {dataForShowDetail.penanganan !== null
                          ? dataForShowDetail.penanganan.map((data, i) => {
                              return (
                                <li
                                  key={i}
                                  className='flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6'
                                >
                                  <div className='flex w-0 flex-1 items-center'>
                                    <div className='ml-4 flex min-w-0 flex-1 gap-2'>
                                      <span className='truncate font-medium'>
                                        {data.seksi.nama_seksi}
                                      </span>
                                    </div>
                                  </div>
                                  <div className='ml-4 flex-shrink-0'>
                                    <span
                                      href='#'
                                      className='font-medium text-indigo-600 hover:text-indigo-500'
                                    >
                                      {data.status.status}
                                    </span>
                                  </div>
                                </li>
                              );
                            })
                          : null}
                      </ul>
                    </ShowDetail.Dd>
                  </ShowDetail.Bi>
                ) : null}
              </ShowDetail.Body>
            </ShowDetail>
          </div>
        </div>
      </section>
    </>
  );
};

ShowDetailPage.layout = page => (
  <LogedLayouts title={`Show Detail Masyarakat`}>
    <Seo title={`Show Detail Masyarakat`} />
    {page}
  </LogedLayouts>
);

export default ShowDetailPage;
