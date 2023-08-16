import { Link, usePage } from '@inertiajs/react';
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
const UserDropdown = () => {
  const { auth } = usePage().props;
  return (
    <>
      <div className='dropdown dropdown-end'>
        <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
          <div className='w-10 rounded-full ring ring-white ring-offset-[#355D32] ring-offset-2'>
            {auth.user.gambar ? (
              <img
                src={`http://pendataan-pengaduan-masyarakat.test/${auth.user.gambar}`}
                alt='Profile'
                className='w-24 h-24'
              />
            ) : (
              <FaUserCircle className='w-10 h-10 text-white' />
            )}
          </div>
        </label>
        <ul
          tabIndex={0}
          className='mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52'
        >
          <li>
            <Link href={`/profile/${auth.user.id}`} className='justify-between'>
              Profile
              <span className='badge'>New</span>
            </Link>
          </li>
          <li>
            <Link href='/logout' method='post' as='button' type='submit'>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default UserDropdown;
