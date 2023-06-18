import React from 'react';
import CardStats from '../Cards/CardStats';
import { usePage } from '@inertiajs/react';

export default function HeaderStats() {
  const { dataForStats } = usePage().props;
  return (
    <div className='relative bg-gradient-to-r from-[#355D32] via-[#64903B] to-[#355D32] md:pt-32 pb-32 pt-12'>
      <div className='px-4 md:px-10 mx-auto w-full'>
        <div>
          <div className='flex flex-wrap'>
            <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
              <CardStats
                statSubtitle={!dataForStats.allUser ? 'pengaduan' : 'all user'}
                statTitle={
                  !dataForStats.allUser
                    ? dataForStats.pengaduan
                    : dataForStats.allUser
                }
                statIconName={
                  !dataForStats.allUser ? 'TbReport' : 'FaUserFriends'
                }
                statIconColor='bg-red-500'
              />
            </div>
            <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
              <CardStats
                statSubtitle={
                  !dataForStats.superAdmin ? 'pending' : 'super admin'
                }
                statTitle={
                  !dataForStats.superAdmin
                    ? dataForStats.pending
                    : dataForStats.superAdmin
                }
                statIconName={
                  !dataForStats.superAdmin ? 'TbCalendarTime' : 'FaUserCog'
                }
                statIconColor='bg-orange-500'
              />
            </div>
            <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
              <CardStats
                statSubtitle={!dataForStats.seksi ? 'prosesing' : 'seksi'}
                statTitle={
                  !dataForStats.seksi
                    ? dataForStats.prosesing
                    : dataForStats.seksi
                }
                statIconName={
                  !dataForStats.seksi ? 'TbChartArcs3' : 'FaUserTie'
                }
                statIconColor='bg-sky-500'
              />
            </div>
            <div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
              <CardStats
                statSubtitle={!dataForStats.masyarakat ? 'finis' : 'masyarakat'}
                statTitle={
                  !dataForStats.masyarakat
                    ? dataForStats.finis
                    : dataForStats.masyarakat
                }
                statIconName={
                  !dataForStats.masyarakat ? 'TbChecklist' : 'FaUsers'
                }
                statIconColor='bg-teal-500'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
