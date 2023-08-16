import Seo from '@/Components/Seo/Seo';
import LogedLayouts from '@/Layouts/loged-layouts';
import { useForm, usePage } from '@inertiajs/react';
import React, { useState } from 'react';

const CreatePemohon = props => {
  const {
    allKecamatan,
    allSeksi,
    allJenisPengaduanAndException,
    allJenisMediaPengaduan,
    allJenisSertifikat,
  } = usePage().props;

  const { data, setData, post, processing, errors, setError, reset } = useForm({
    jenis_pengaduan: '',
    jenis_media_pengaduan: '',
    nama_pemohon: '',
    no_nik: '',
    no_telpon: '',
    no_hak: '',
    jenis_sertifikat: '',
    keterangan_laporan_pengaduan: '',
    seksi_survei_dan_pemetaan: false,
    seksi_penataan_dan_pemberdayaan: false,
    seksi_pengendalian_dan_penanganan_sengketa: false,
    seksi_penetapan_hak_dan_pendaftaran: false,
    seksi_pengadaan_tanah_dan_pengembangan: false,
    kecamatan: '',
    desa: '',
  });

  const [selectedKecamatan, setSelectedKecamatan] = useState(null);
  const [form, setForm] = useState(false);

  const isDirtyJenisPengaduan = () => {
    return data.jenis_pengaduan == '' || data.jenis_media_pengaduan == ''
      ? true
      : false;
  };

  const handleChangeForm = e => {
    const { name, value, checked, type } = e.target;
    if (name === 'jenis_pengaduan') {
      value !== allJenisPengaduanAndException.pengecualianJenisPengaduan.id
        ? setForm(true)
        : setForm(false);
    }
    if (name === 'kecamatan') {
      const selectedDesa = allKecamatan.find(
        kecamatan => kecamatan.id === String(value)
      );
      setSelectedKecamatan(selectedDesa);
    }
    setData(name, type === 'checkbox' ? checked : value);
  };

  const getKelurahanOptions = () => {
    if (!selectedKecamatan) {
      return [];
    }
    return selectedKecamatan.desa.map(desa => (
      <option key={desa.id} value={desa.id}>
        {desa.nama_desa}
      </option>
    ));
  };

  const submit = e => {
    e.preventDefault();
    post(route('pelayanan-publik.store'), {
      preserveScroll: true,
      onSuccess: () => reset(),
    });
  };

  return (
    <>
      <section className='relative box-border p-5 md:py-20 md:px-10 lg:py-0 w-full'>
        <form
          className='flex flex-wrap p-2 md:p-5 w-full bg-base-200 md:justify-between space-y-6'
          onSubmit={submit}
        >
          <h1 className='md:w-full'>Form Input Pengaduan</h1>

          <div className='form-control w-full max-w-xs'>
            <label className='label'>
              <span className='label-text'>Jenis Pengaduan</span>
            </label>
            <select
              name='jenis_pengaduan'
              className='select select-bordered'
              onChange={handleChangeForm}
              required
            >
              <option value={''}>Jenis Pengaduan :</option>
              {allJenisPengaduanAndException.semuaJenisPengaduan.map(
                (data, i) => {
                  return (
                    <option key={i} value={data.id}>
                      {data.jenis_pengaduan}
                    </option>
                  );
                }
              )}
            </select>
          </div>

          {data.jenis_pengaduan !== '' ? (
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Jenis Media Pengaduan</span>
              </label>
              <select
                name='jenis_media_pengaduan'
                className='select select-bordered'
                onChange={handleChangeForm}
                required
              >
                <option value={''}>Jenis Media Pengaduan :</option>
                {allJenisMediaPengaduan.map((data, i) => {
                  return (
                    <option key={i} value={data.id}>
                      {data.nama_media_pengaduan}
                    </option>
                  );
                })}
              </select>
            </div>
          ) : null}

          {data.jenis_pengaduan !== '' ? (
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Nama Pemohon</span>
              </label>
              <input
                name='nama_pemohon'
                onChange={handleChangeForm}
                value={data.nama_pemohon}
                type='text'
                placeholder='Masukkan Nama Pemohon'
                className='input input-bordered w-full max-w-xs'
                required
              />
              {errors.nama_pemohon ? (
                <label className='label'>
                  <span className='label-text-alt'>{errors.nama_pemohon}</span>
                </label>
              ) : null}
            </div>
          ) : null}
          {form == true && data.jenis_pengaduan !== '' ? (
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>No KTP</span>
              </label>
              <input
                name='no_nik'
                onChange={handleChangeForm}
                value={data.no_nik}
                type='number'
                placeholder='Masukan NIK Pemohon'
                className='input input-bordered w-full max-w-xs'
                required
              />
              {errors.no_nik ? (
                <label className='label'>
                  <span className='label-text-alt'>{errors.no_nik}</span>
                </label>
              ) : null}
            </div>
          ) : null}
          {form == true && data.jenis_pengaduan !== '' ? (
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>No Telpon</span>
              </label>
              <input
                name='no_telpon'
                onChange={handleChangeForm}
                value={data.no_telpon}
                type='text'
                placeholder='Masukan no telpon Pemohon'
                className='input input-bordered w-full max-w-xs'
                required
              />
              {errors.no_nik ? (
                <label className='label'>
                  <span className='label-text-alt'>{errors.no_nik}</span>
                </label>
              ) : null}
            </div>
          ) : null}

          {form == true && data.jenis_pengaduan !== '' ? (
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>No Hak</span>
              </label>
              <input
                name='no_hak'
                onChange={handleChangeForm}
                value={data.no_hak}
                type='text'
                placeholder='Type here'
                className='input input-bordered w-full max-w-xs'
                required
              />
              {errors.no_hak ? (
                <label className='label'>
                  <span className='label-text-alt'>{errors.no_hak}</span>
                </label>
              ) : null}
            </div>
          ) : null}
          {form == true && data.jenis_pengaduan !== '' ? (
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Jenis Sertifikat</span>
              </label>
              <select
                name='jenis_sertifikat'
                onChange={handleChangeForm}
                className='select select-bordered'
                required
              >
                <option>Jenis Hak</option>
                {allJenisSertifikat.map((data, i) => {
                  return (
                    <option key={i} value={data.id}>
                      {data.jenis_sertifikat}
                    </option>
                  );
                })}
              </select>
            </div>
          ) : null}
          {data.jenis_pengaduan !== '' ? (
            <div className='form-control w-full'>
              <label className='label'>
                <span className='label-text'>Keterangan Laporan Pengaduan</span>
              </label>
              <textarea
                name='keterangan_laporan_pengaduan'
                className='textarea textarea-bordered h-24'
                placeholder='Keterangan Laporan Pengaduan'
                value={data.keterangan_laporan_pengaduan}
                onChange={handleChangeForm}
                required
              />
            </div>
          ) : null}
          {form == true && data.jenis_pengaduan !== '' ? (
            <div className='form-control flex-row flex-wrap justify-between'>
              <span className='label-text w-full'>Penanganan</span>
              {allSeksi.map((data, i) => {
                return (
                  <label
                    className='label cursor-pointer space-x-3 w-2/5'
                    key={i}
                  >
                    <span className='label-text'>{data.nama_seksi}</span>
                    <input
                      name={`${data.nama_seksi.replace(/ /g, '_')}`}
                      type='checkbox'
                      className='checkbox'
                      onChange={handleChangeForm}
                    />
                  </label>
                );
              })}
            </div>
          ) : null}

          {form == true && data.jenis_pengaduan !== '' ? (
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Kecamatan</span>
              </label>
              <select
                name='kecamatan'
                className='select select-bordered'
                onChange={handleChangeForm}
                required
              >
                <option>Kecamatan</option>
                {allKecamatan.map((data, i) => {
                  return (
                    <option key={i} value={data.id}>
                      {data.nama_kecamatan}
                    </option>
                  );
                })}
              </select>
            </div>
          ) : null}
          {form == true && data.jenis_pengaduan !== '' ? (
            <div className='form-control w-full max-w-xs'>
              <label className='label'>
                <span className='label-text'>Kelurahan</span>
              </label>
              <select
                name='desa'
                className='select select-bordered'
                disabled={!selectedKecamatan}
                onChange={handleChangeForm}
                required
              >
                <option>Kelurahan</option>
                {getKelurahanOptions()}
              </select>
            </div>
          ) : null}
          <div className='w-full'>
            {data.jenis_pengaduan !== '' ? (
              <button
                className='mt-3 btn btn-success text-base-100'
                type='submit'
                disabled={processing || isDirtyJenisPengaduan()}
              >
                Upload
              </button>
            ) : null}
          </div>
        </form>
      </section>
    </>
  );
};

CreatePemohon.layout = page => (
  <LogedLayouts title={`Create Pemohon`}>
    <Seo title={`Create Pemohon`} />
    {page}
  </LogedLayouts>
);

export default CreatePemohon;
