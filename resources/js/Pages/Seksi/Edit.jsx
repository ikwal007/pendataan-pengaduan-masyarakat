import Seo from '@/Components/Seo/Seo';
import ShowDetail from '@/Components/ShowDetails/ShowDetail';
import LogedLayouts from '@/Layouts/loged-layouts';
import { router, useForm, usePage } from '@inertiajs/react';
import React from 'react';

const Edit = () => {
  const { dataForShowDetail, allStatus } = usePage().props;

  const { data, setData, patch, processing, errors } = useForm({
    statusPenanganan: dataForShowDetail.status.id,
    penangananId: dataForShowDetail.id
  });

  const goBack = () => {
    router.visit('/seksi/dashboard');
  };

  const handleChangeForm = e => {
    const { name, value } = e.target;
    setData(name, value);
  };

  const submit = e => {
    e.preventDefault();
    patch(route('seksi.update', [dataForShowDetail.id]), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  return (
    <section className='relative box-border p-5 md:py-20 md:px-10 lg:py-0 w-full'>
      <div className='flex flex-wrap p-2 md:p-5 w-full bg-base-200 md:justify-between'>
        <div className='overflow-x-auto w-full'>
          <ShowDetail action={goBack}>
            <ShowDetail.Head>
              <ShowDetail.H3 children={`Informasi Data Pemohon`} />
              <ShowDetail.P children={`Detail pemohon dan laporan`} />
            </ShowDetail.Head>
            <ShowDetail.Body>
              {dataForShowDetail.nama_pemohon !== null ? (
                <ShowDetail.Bi>
                  <ShowDetail.Dt children={`Nama Pemohon`} />
                  <ShowDetail.Dd
                    children={dataForShowDetail.pemohon.nama_pemohon}
                  />
                </ShowDetail.Bi>
              ) : null}
              {dataForShowDetail.nik !== null ? (
                <ShowDetail.Bi>
                  <ShowDetail.Dt children={`Nik`} />
                  <ShowDetail.Dd children={dataForShowDetail.pemohon.nik} />
                </ShowDetail.Bi>
              ) : null}
              {dataForShowDetail.desa ? (
                <ShowDetail.Bi>
                  <ShowDetail.Dt children={`Desa`} />
                  <ShowDetail.Dd
                    children={dataForShowDetail.pemohon.desa.nama_desa}
                  />
                </ShowDetail.Bi>
              ) : null}
              {dataForShowDetail.kecamatan ? (
                <ShowDetail.Bi>
                  <ShowDetail.Dt children={`Kecamatan`} />
                  <ShowDetail.Dd
                    children={
                      dataForShowDetail.pemohon.kecamatan.nama_kecamatan
                    }
                  />
                </ShowDetail.Bi>
              ) : null}
              {dataForShowDetail.pemohon.jenis_media_pengaduan
                .jenis_media_pengaduan !== null ? (
                <ShowDetail.Bi>
                  <ShowDetail.Dt children={`Jenis Media Pengaduan`} />
                  <ShowDetail.Dd
                    children={
                      dataForShowDetail.pemohon.jenis_media_pengaduan
                        .nama_media_pengaduan
                    }
                  />
                </ShowDetail.Bi>
              ) : null}
              {dataForShowDetail.pemohon.jenis_sertifikat !== null ? (
                <ShowDetail.Bi>
                  <ShowDetail.Dt children={`Jenis Sertifikat`} />
                  <ShowDetail.Dd
                    children={
                      dataForShowDetail.pemohon.jenis_sertifikat
                        .jenis_sertifikat
                    }
                  />
                </ShowDetail.Bi>
              ) : null}
              {dataForShowDetail.pemohon.no_hak !== null ? (
                <ShowDetail.Bi>
                  <ShowDetail.Dt children={`no hak`} />
                  <ShowDetail.Dd children={dataForShowDetail.pemohon.no_hak} />
                </ShowDetail.Bi>
              ) : null}
              {dataForShowDetail.pemohon.keterangan_pengaduan_pemohon !==
              null ? (
                <ShowDetail.Bi>
                  <ShowDetail.Dt children={`Keterangan Permohonan`} />
                  <ShowDetail.Dd
                    children={
                      dataForShowDetail.pemohon.keterangan_pengaduan_pemohon
                    }
                  />
                </ShowDetail.Bi>
              ) : null}
              <ShowDetail.Bi>
                <ShowDetail.Dt children={`Status Permohonan`} />
                <ShowDetail.Dd
                  children={dataForShowDetail.pemohon.status.status}
                />
              </ShowDetail.Bi>
              <form onSubmit={submit}>
                <ShowDetail.Bi>
                  <ShowDetail.Dt children={`Status Penanganan`} />
                  <ShowDetail.Dd
                    children={
                      <select
                        className='select select-accent w-full max-w-xs'
                        value={data.statusPenanganan}
                        onChange={handleChangeForm}
                        name='statusPenanganan'
                      >
                        {allStatus.length > 0
                          ? allStatus.map((data, i) => {
                              return <option key={i} value={data.id} >{data.status}</option>;
                            })
                          : null}
                      </select>
                    }
                  />
                </ShowDetail.Bi>
                <button className='btn btn-success' type='submit'>Simpan</button>
              </form>
            </ShowDetail.Body>
          </ShowDetail>
        </div>
      </div>
    </section>
  );
};

Edit.layout = page => (
  <LogedLayouts title={`Edit Seksi`}>
    <Seo title={`Edit Seksi`} />
    {page}
  </LogedLayouts>
);

export default Edit;
