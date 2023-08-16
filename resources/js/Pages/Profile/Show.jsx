import Seo from '@/Components/Seo/Seo';
import ShowDetail from '@/Components/ShowDetails/ShowDetail';
import LogedLayouts from '@/Layouts/loged-layouts';
import { Link, usePage } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Show = () => {
  const { auth, flash } = usePage().props;
  const [showFlash, setShowFlash] = useState(false);

  useEffect(() => {
    if (flash.message) {
      setShowFlash(true);
      const timer = setTimeout(() => {
        setShowFlash(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [flash.message]);

  let url = '';
  if (auth && auth.user) {
    url = menentukanDashboardUrl(auth.user.role);
  }

  return (
    <section className='relative box-border p-5 md:py-20 md:px-10 lg:py-0 w-full'>
      <div className='flex flex-wrap p-2 md:p-5 w-full bg-base-200 md:justify-between'>
        <div className='overflow-x-auto w-full'>
          {showFlash && flash.message && (
            <div className='alert alert-success my-3'>
              <BiCheck />
              <span>{flash.message}</span>
            </div>
          )}
          {auth && auth.user && (
            <ShowDetail patch={url}>
              <ShowDetail.Head>
                <ShowDetail.H3 children={`Informasi Data Pemohon`} />
                <ShowDetail.P children={`Detail pemohon dan laporan`} />
              </ShowDetail.Head>
              <ShowDetail.Body>
                {auth.user.gambar && (
                  <ShowDetail.Bi>
                    <ShowDetail.Dt children={`Avatar`} />
                    <ShowDetail.Dd children={renderAvatar(auth.user.gambar)} />
                  </ShowDetail.Bi>
                )}
                {auth.user.name && (
                  <ShowDetail.Bi>
                    <ShowDetail.Dt children={`Nama`} />
                    <ShowDetail.Dd children={auth.user.name} />
                  </ShowDetail.Bi>
                )}
                {auth.user.nik && (
                  <ShowDetail.Bi>
                    <ShowDetail.Dt children={`Nik`} />
                    <ShowDetail.Dd children={auth.user.nik} />
                  </ShowDetail.Bi>
                )}
                {auth.user.email && (
                  <ShowDetail.Bi>
                    <ShowDetail.Dt children={`Email`} />
                    <ShowDetail.Dd children={auth.user.email} />
                  </ShowDetail.Bi>
                )}
                <ShowDetail.Bi>
                  <ShowDetail.Dt children={''} />
                  <ShowDetail.Dd
                    children={
                      <Link
                        href={editProfileUrl(auth.user.id)}
                        className='btn btn-success'
                      >
                        ubah
                      </Link>
                    }
                  />
                </ShowDetail.Bi>
              </ShowDetail.Body>
            </ShowDetail>
          )}
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

function menentukanDashboardUrl(role) {
  switch (role) {
    case 'Super_Admin':
      return '/super-admin/dashboard';
    case 'Pelayanan_Publik':
      return '/pelayanan-publik/dashboard';
    case 'Seksi':
      return '/seksi/dashboard';
    case 'Masyarakat':
      return '/masyarakat/dashboard';
    default:
      return '/';
  }
}

function renderAvatar(gambar) {
  return (
    <div className='avatar'>
      <div className='w-24 rounded-full ring ring-[#355D32] ring-offset-base-100 ring-offset-2'>
        {gambar ? (
          <img
            src={`http://pendataan-pengaduan-masyarakat.test/${gambar}`}
            alt='Profile'
            className='w-24 h-24'
          />
        ) : (
          <FaUserCircle className='w-24 h-24 text-[#355D32]' />
        )}
      </div>
    </div>
  );
}

function editProfileUrl(userId) {
  return `/profile/${userId}/edit`;
}

export default Show;
