import Seo from '@/Components/Seo/Seo';
import ShowDetail from '@/Components/ShowDetails/ShowDetail';
import LogedLayouts from '@/Layouts/loged-layouts';
import { useForm, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Edit = () => {
  const { auth, dataForDetail } = usePage().props;
  const { data, setData, post, processing, errors } = useForm({
    name: dataForDetail.name,
    email: dataForDetail.email,
    nik: dataForDetail.nik || '',
    gambar: dataForDetail.gambar || '',
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handleChangeForm = e => {
    const { name, value, files, type } = e.target;
    setData(name, type === 'file' ? files[0] : value);

    if (type === 'file' && files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const submit = e => {
    e.preventDefault();
    post(route('profile.update', [auth.user.id]), {
      preserveScroll: true,
    });
  };

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
        <form
          className='overflow-x-auto w-full'
          onSubmit={submit}
          encType='multipart/form-data'
        >
          <ShowDetail patch={url}>
            <ShowDetail.Head>
              <ShowDetail.H3 children={`Informasi Data Pemohon`} />
              <ShowDetail.P children={`Detail pemohon dan laporan`} />
            </ShowDetail.Head>
            <ShowDetail.Body>
              {dataForDetail !== null ? (
                <ShowDetail.Bi>
                  <ShowDetail.Dt children={`Avatar`} />
                  <ShowDetail.Dd
                    children={
                      <div className='flex space-x-4 items-center'>
                        <div className='avatar'>
                          <div className='w-24 rounded-full ring ring-[#355D32] ring-offset-base-100 ring-offset-2'>
                            {previewImage ? (
                              <img
                                src={previewImage}
                                alt='Preview'
                                className='w-24 h-24'
                              />
                            ) : (
                              <FaUserCircle className='w-24 h-24 text-[#355D32]' />
                            )}
                          </div>
                        </div>
                        <input
                          name='gambar'
                          type='file'
                          className='file-input file-input-bordered file-input-success w-full max-w-xs'
                          required
                          onChange={handleChangeForm}
                        />
                      </div>
                    }
                  />
                </ShowDetail.Bi>
              ) : null}
              {dataForDetail.name !== null ? (
                <ShowDetail.Bi>
                  <ShowDetail.Dt children={`Nama`} />
                  <ShowDetail.Dd
                    children={
                      <input
                        name='name'
                        type='text'
                        placeholder='Type here'
                        value={data.name}
                        onChange={handleChangeForm}
                        required
                        className='input input-bordered w-full max-w-xs'
                      />
                    }
                  />
                </ShowDetail.Bi>
              ) : null}
              {dataForDetail.nik !== null ? (
                <ShowDetail.Bi>
                  <ShowDetail.Dt children={`Nik`} />
                  <ShowDetail.Dd
                    children={
                      <input
                        name='nik'
                        type='text'
                        placeholder='Type here'
                        value={data.nik}
                        onChange={handleChangeForm}
                        required={auth.user.role == 'masyarakat' && true}
                        className='input input-bordered w-full max-w-xs'
                      />
                    }
                  />
                </ShowDetail.Bi>
              ) : null}
              {dataForDetail.email ? (
                <ShowDetail.Bi>
                  <ShowDetail.Dt children={`Email`} />
                  <ShowDetail.Dd
                    children={
                      <input
                        name='email'
                        type='text'
                        placeholder='Type here'
                        value={data.email}
                        onChange={handleChangeForm}
                        required
                        className='input input-bordered w-full max-w-xs'
                      />
                    }
                  />
                </ShowDetail.Bi>
              ) : null}
              <ShowDetail.Bi>
                <ShowDetail.Dt children={``} />
                <ShowDetail.Dd
                  children={
                    <button
                      type='submit'
                      href={`/profile/${auth.user.id}/edit`}
                      className='btn btn-success'
                    >
                      Save
                    </button>
                  }
                />
              </ShowDetail.Bi>
            </ShowDetail.Body>
          </ShowDetail>
        </form>
      </div>
    </section>
  );
};

Edit.layout = page => (
  <LogedLayouts title={`Edit Profile`}>
    <Seo title={`Edit Profile`} />
    {page}
  </LogedLayouts>
);

export default Edit;
