import Seo from '@/Components/Seo/Seo';
import GuestLayouts from '@/Layouts/guest-layouts';
import { Link } from '@inertiajs/react';

export default function Welcome(props) {
  return (
    <>
      <section>
        <div
          className='hero min-h-screen'
          style={{
            backgroundImage: `url("/assets/imgs/img1.jpg")`,
          }}
        >
          <div className='hero-overlay bg-opacity-60'></div>
          <div className='hero-content text-center text-neutral-content'>
            <div className='max-w-md'>
              <h1 className='mb-5 text-5xl font-bold'>
                Selamat Datang Semuanya
              </h1>
              <p className='mb-5'>
                Selamat datang di website Pengaduan Masyarakat, semoga hari anda
                bahagia selalu
              </p>
              <Link
                href='/pengaduan-masyarakat'
                className='btn btn-success text-base-100 capitalize'
              >
                lapor pengaduan sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

Welcome.layout = page => (
  <GuestLayouts>
    <Seo />
    {page}
  </GuestLayouts>
);
