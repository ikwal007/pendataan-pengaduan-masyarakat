import Seo from '@/Components/Seo/Seo';
import { AdminDashboardShowDetail as Details } from '@/Components/ShowDetails/AdminDashboardShowDetail';
import LogedLayouts from '@/Layouts/loged-layouts';
import React from 'react';

const showDetail = props => {
  return (
    <>
      <Seo />
      <section className='relative box-border p-5 md:py-20 md:px-10 lg:py-0 w-full'>
        <div className='flex flex-wrap p-2 md:p-5 w-full bg-base-200 md:justify-between'>
          <div className='overflow-x-auto w-full'>
            <Details datas={props.dataForShowDetail} />
          </div>
        </div>
      </section>
    </>
  );
};

showDetail.layout = page => (
  <LogedLayouts>
    <Seo title={`Dashboard Admin`} />
    {page}
  </LogedLayouts>
);

export default showDetail;
