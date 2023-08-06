import React, { useEffect, useState } from 'react';
import { MdClose, MdDashboard, MdOutlinePostAdd } from 'react-icons/md';
import { Link, usePage } from '@inertiajs/react';

import UserDropdown from '../Dropdowns/UserDropdown';
import axios from 'axios';

const API_URL = '/api/count/peninjauan-pemohon';

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState(false);
  const { auth } = usePage().props;
  const [notificationCount, setNotificationCount] = useState(0);

  const toggleCollapse = () => {
    setCollapseShow(prevState => !prevState);
  };

  const fetchNotificationCount = async () => {
    try {
      const response = await axios.get(API_URL);
      const data = response.data;
      setNotificationCount(data);
    } catch (error) {
      console.error('Error fetching notification count:', error);
    }
  };

  useEffect(() => {
    const delay = 1000; // 1 detik (1000 milidetik)

    const timerId = setTimeout(fetchNotificationCount, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [auth.user.role]);

  return (
    <>
      <nav className='md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6'>
        <div className='md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto'>
          {/* Brand */}
          <Link href='/'>
            <span
              href='#pablo'
              className='md:block text-left md:pb-2 text-black mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0'
            >
              Home
            </span>
          </Link>
          {/* Collapse */}
          <div
            className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ${collapseShow} hidden`}
          >
            {/* Role-specific navigation */}
            {auth.user.role === 'Super_Admin' && (
              <div>
                {/* Divider */}
                <hr className='my-4 md:min-w-full' />
                {/* Heading */}
                <h6 className='md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline'>
                  Admin Pages
                </h6>
                {/* Navigation */}
                <ul className='md:flex-col md:min-w-full flex flex-col list-none'>
                  <li className='items-center'>
                    <Link href={route('super-admin.index')}>
                      <span
                        className={`flex text-xs uppercase py-3 font-bold ${
                          route().current('super-admin.*')
                            ? 'text-success hover:text-success hover:opacity-50'
                            : 'text-black hover:text-black hover:opacity-50'
                        }`}
                      >
                        <MdDashboard
                          className={`mr-2 text-sm ${
                            route().current('super-admin.*')
                              ? 'opacity-75'
                              : 'text-black'
                          }`}
                        />
                        Dashboard
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}

            {auth.user.role === 'Pelayanan_Publik' && (
              <div>
                {/* Divider */}
                <hr className='my-4 md:min-w-full' />
                {/* Heading */}
                <h6 className='md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline'>
                  Pelayanan Publik
                </h6>
                {/* Navigation */}
                <ul className='md:flex-col md:min-w-full flex flex-col list-none'>
                  <li className='items-center'>
                    <Link href={route('pelayanan-publik.index')}>
                      <span
                        className={`flex text-xs uppercase py-3 font-bold ${
                          route().current('pelayanan-publik.index') ||
                          route().current('pelayanan-publik.show')
                            ? 'text-success hover:text-success hover:opacity-50'
                            : 'text-black hover:text-black hover:opacity-50'
                        }`}
                      >
                        <MdDashboard
                          className={`mr-2 text-sm ${
                            route().current('pelayanan-publik.index') ||
                            route().current('pelayanan-publik.show')
                              ? 'opacity-75'
                              : 'text-black'
                          }`}
                        />
                        Dashboard
                      </span>
                    </Link>
                  </li>
                  <li className='items-center'>
                    <Link href={route('pelayanan-publik.create')}>
                      <span
                        className={`flex text-xs uppercase py-3 font-bold ${
                          route().current('pelayanan-publik.create')
                            ? 'text-success hover:text-success hover:opacity-50'
                            : 'text-black hover:text-black hover:opacity-50'
                        }`}
                      >
                        <MdOutlinePostAdd
                          className={`mr-2 text-sm ${
                            route().current('pelayanan-publik.create')
                              ? 'opacity-75'
                              : 'text-black'
                          }`}
                        />
                        Create Permohonan
                      </span>
                    </Link>
                  </li>
                  <li className='items-center'>
                    <Link href={route('pelayanan-publik.peninjauan-pemohon')}>
                      <span
                        className={`flex text-xs uppercase py-3 font-bold indicator ${
                          route().current(
                            'pelayanan-publik.peninjauan-pemohon'
                          ) ||
                          route().current(
                            'pelayanan-publik.peninjauan-pemohon-edit'
                          )
                            ? 'text-success hover:text-success hover:opacity-50'
                            : 'text-black hover:text-black hover:opacity-50'
                        }`}
                      >
                        {notificationCount != 0 && (
                          <span className='indicator-item badge badge-success'>
                            {notificationCount}
                          </span>
                        )}
                        <MdOutlinePostAdd
                          className={`mr-2 text-sm ${
                            route().current(
                              'pelayanan-publik.peninjauan-pemohon'
                            ) ||
                            route().current(
                              'pelayanan-publik.peninjauan-pemohon-edit'
                            )
                              ? 'opacity-75'
                              : 'text-black'
                          }`}
                        />
                        Peninjauan Permohonan
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}

            {auth.user.role === 'Seksi' && (
              <div>
                {/* Divider */}
                <hr className='my-4 md:min-w-full' />
                {/* Heading */}
                <h6 className='md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline'>
                  Seksi
                </h6>
                {/* Navigation */}
                <ul className='md:flex-col md:min-w-full flex flex-col list-none'>
                  <li className='items-center'>
                    <Link href={route('seksi.index')}>
                      <span
                        className={`flex text-xs uppercase py-3 font-bold ${
                          route().current('seksi.*')
                            ? 'text-success hover:text-success hover:opacity-50'
                            : 'text-black hover:text-black hover:opacity-50'
                        }`}
                      >
                        <MdDashboard
                          className={`mr-2 text-sm ${
                            route().current('seksi.*')
                              ? 'opacity-75'
                              : 'text-black'
                          }`}
                        />
                        Dashboard
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}

            {auth.user.role === 'Masyarakat' && (
              <div>
                {/* Divider */}
                <hr className='my-4 md:min-w-full' />
                {/* Heading */}
                <h6 className='md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline'>
                  Masyarakat
                </h6>
                {/* Navigation */}
                <ul className='md:flex-col md:min-w-full flex flex-col list-none'>
                  <li className='items-center'>
                    <Link href={route('masyarakat.index')}>
                      <span
                        className={`flex text-xs uppercase py-3 font-bold ${
                          route().current('masyarakat.index')
                            ? 'text-success hover:text-success hover:opacity-50'
                            : 'text-black hover:text-black hover:opacity-50'
                        }`}
                      >
                        <MdDashboard
                          className={`mr-2 text-sm ${
                            route().current('masyarakat.index')
                              ? 'opacity-75'
                              : 'text-black'
                          }`}
                        />
                        Dashboard
                      </span>
                    </Link>
                  </li>
                  <li className='items-center'>
                    <Link href={route('masyarakat.create')}>
                      <span
                        className={`flex text-xs uppercase py-3 font-bold ${
                          route().current('masyarakat.create')
                            ? 'text-success hover:text-success hover:opacity-50'
                            : 'text-black hover:text-black hover:opacity-50'
                        }`}
                      >
                        <MdDashboard
                          className={`mr-2 text-sm ${
                            route().current('masyarakat.create')
                              ? 'opacity-75'
                              : 'text-black'
                          }`}
                        />
                        Create Pemohonan
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className='navbar md:hidden bg-base-100'>
            <div className='navbar-start'>
              <div className='dropdown'>
                <label tabIndex={0} className='btn btn-ghost lg:hidden'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M4 6h16M4 12h8m-8 6h16'
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className='menu menu-sm dropdown-content mt-10 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                >
                  {auth.user.role == 'Super_Admin' && (
                    <li>
                      <Link
                        href={route('super-admin.index')}
                        className={`text-sm hover:text-success ${
                          route().current('super-admin.*')
                            ? 'text-success'
                            : 'text-black'
                        }`}
                      >
                        <MdDashboard
                          className={`text-sm ${
                            route().current('super-admin.*')
                              ? 'text-success'
                              : 'text-black'
                          }`}
                        />
                        Dashboard
                      </Link>
                    </li>
                  )}

                  {auth.user.role == 'Seksi' && (
                    <li>
                      <Link
                        href={route('seksi.index')}
                        className={`text-sm hover:text-success ${
                          route().current('super-admin.*')
                            ? 'text-success'
                            : 'text-black'
                        }`}
                      >
                        <MdDashboard
                          className={`text-sm ${
                            route().current('seksi.*')
                              ? 'text-success'
                              : 'text-black'
                          }`}
                        />
                        Dashboard
                      </Link>
                    </li>
                  )}

                  {auth.user.role == 'Pelayanan_Publik' && (
                    <>
                      <li>
                        <Link
                          href={route('pelayanan-publik.index')}
                          className={`text-sm hover:text-success ${
                            route().current('pelayanan-publik.index') ||
                            route().current('pelayanan-publik.show')
                              ? 'text-success'
                              : 'text-black'
                          }`}
                        >
                          <MdDashboard
                            className={`text-sm ${
                              route().current('pelayanan-publik.index') ||
                              route().current('pelayanan-publik.show')
                                ? 'text-success'
                                : 'text-black'
                            }`}
                          />
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={route('pelayanan-publik.create')}
                          className={`group text-sm hover:text-success ${
                            route().current('pelayanan-publik.create')
                              ? 'text-success'
                              : 'text-black'
                          }`}
                        >
                          <MdOutlinePostAdd
                            className={`text-sm group-hover:text-success ${
                              route().current('pelayanan-publik.create')
                                ? 'text-success'
                                : 'text-black'
                            }`}
                          />
                          Buat Permohonan
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={route('pelayanan-publik.peninjauan-pemohon')}
                          className={`group text-sm hover:text-success ${
                            route().current(
                              'pelayanan-publik.peninjauan-pemohon'
                            ) ||
                            route().current(
                              'pelayanan-publik.peninjauan-pemohon-edit'
                            )
                              ? 'text-success'
                              : 'text-black'
                          }`}
                        >
                          {notificationCount != 0 && (
                            <span className='indicator-item badge badge-success'>
                              {notificationCount}
                            </span>
                          )}
                          <MdOutlinePostAdd
                            className={`text-sm group-hover:text-success ${
                              route().current(
                                'pelayanan-publik.peninjauan-pemohon'
                              ) ||
                              route().current(
                                'pelayanan-publik.peninjauan-pemohon-edit'
                              )
                                ? 'text-success'
                                : 'text-black'
                            }`}
                          />
                          Peninjauan Permohonan
                        </Link>
                      </li>
                    </>
                  )}

                  {auth.user.role == 'Masyarakat' && (
                    <>
                      <li>
                        <Link
                          href={route('masyarakat.index')}
                          className={`text-sm hover:text-success ${
                            route().current('masyarakat.index')
                              ? 'text-success'
                              : 'text-black'
                          }`}
                        >
                          <MdDashboard
                            className={`text-sm ${
                              route().current('masyarakat.index')
                                ? 'text-success'
                                : 'text-black'
                            }`}
                          />
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          href={route('masyarakat.create')}
                          className={`group text-sm hover:text-success ${
                            route().current('masyarakat.create')
                              ? 'text-success'
                              : 'text-black'
                          }`}
                        >
                          <MdOutlinePostAdd
                            className={`text-sm group-hover:text-success ${
                              route().current('masyarakat.create')
                                ? 'text-success'
                                : 'text-black'
                            }`}
                          />
                          Buat Permohonan
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
            <div className='navbar-center hidden lg:flex'></div>
            <div className='navbar-end'>
              <UserDropdown />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
