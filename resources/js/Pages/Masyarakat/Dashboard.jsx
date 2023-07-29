import Seo from '@/Components/Seo/Seo';
import Table from '@/Components/Tabel/Tabel';
import LogedLayouts from '@/Layouts/loged-layouts';
import { Link, usePage } from '@inertiajs/react';
import { BiCheck, BiInfoCircle } from 'react-icons/bi';
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const {
    flash,
    dataForTable,
    dataForTableByStatusPending,
    dataForTableByStatusProsesing,
    dataForTableByStatusFinis,
  } = usePage().props;
  const [hide, setHide] = useState(true);
  const [selectedOption, setSelectedOption] = useState('dataForTable');
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

  const formatDateOnly = dateString => {
    const dateObject = new Date(dateString);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0');
    const day = String(dateObject.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };

  const handleSelectChange = event => {
    setSelectedOption(event.target.value);
  };

  const rowTableByStatusComponents = data => {
    return (
      <>
        {data.map((data, i) => {
          return (
            <Table.Tr key={i}>
              <Table.Td>{i + 1}</Table.Td>
              <Table.Td>{data.no_hak}</Table.Td>
              <Table.Td>{data.status.status}</Table.Td>
              <Table.Td>{formatDateOnly(data.created_at)}</Table.Td>
              <Table.Td>
                <Table.Link href={route(`masyarakat.show`, [data.id])}>
                  Show Detail
                </Table.Link>
              </Table.Td>
            </Table.Tr>
          );
        })}
      </>
    );
  };

  let selectedData;
  let prevLink;
  let nextLink;
  switch (selectedOption) {
    case 'dataForTable':
      selectedData = dataForTable.data;
      prevLink = dataForTable.prev_page_url;
      nextLink = dataForTable.next_page_url;
      break;
    case 'dataForTableByStatusPending':
      selectedData = dataForTableByStatusPending.data;
      prevLink = dataForTableByStatusPending.prev_page_url;
      nextLink = dataForTableByStatusPending.next_page_url;
      break;
    case 'dataForTableByStatusProsesing':
      selectedData = dataForTableByStatusProsesing.data;
      prevLink = dataForTableByStatusProsesing.prev_page_url;
      nextLink = dataForTableByStatusProsesing.next_page_url;
      break;
    case 'dataForTableByStatusFinis':
      selectedData = dataForTableByStatusFinis.data;
      prevLink = dataForTableByStatusFinis.prev_page_url;
      nextLink = dataForTableByStatusFinis.next_page_url;
      break;
    default:
      selectedData = [];
      prevLink = '';
      nextLink = '';
  }

  return (
    <section className='relative box-border p-5 md:py-20 md:px-10 lg:py-0 w-full'>
      <div className='flex flex-wrap p-2 md:p-5 w-full bg-base-200 md:justify-between'>
        <div className='overflow-x-auto w-full bg-white p-3 rounded-xl'>
          {showFlash && flash.message && (
            <div className='alert alert-success my-3'>
              <BiCheck />
              <span>{flash.message}</span>
            </div>
          )}
          <div className='form-control w-full max-w-xs mb-3'>
            <label className='label'>
              <button onClick={() => setHide(!hide)}>
                <BiInfoCircle className='text-info' />
              </button>
              {hide === true ? null : (
                <span className='label-text-alt capitalize'>
                  pilih untuk memfilter berdasarkan status
                </span>
              )}
            </label>
            <select
              className='select select-bordered'
              onChange={handleSelectChange}
              value={selectedOption}
            >
              <option value={'dataForTable'}>Semua</option>
              <option value={'dataForTableByStatusPending'}>Pending</option>
              <option value={'dataForTableByStatusProsesing'}>
                Processing
              </option>
              <option value={'dataForTableByStatusFinis'}>Finis</option>
            </select>
          </div>
          <Table dataForTable={dataForTable.data}>
            <Table.Thead>
              <Table.Tr>
                <Table.Th></Table.Th>
                <Table.Th>No Hak</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Tanggal Dibuat</Table.Th>
                <Table.Th>Action</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
            {selectedData.length > 0 ? (
                rowTableByStatusComponents(selectedData)
              ) : (
                <Table.Tr>
                  <Table.Td className='capitalize' colSpan={5} align='center'>
                    data atas nama anda tidak ada
                  </Table.Td>
                </Table.Tr>
              )}
            </Table.Tbody>
          </Table>

          <div className='join grid grid-cols-2 max-w-[250px] mt-3'>
            <Link
              href={prevLink}
              className='join-item btn btn-xs btn-outline'
              disabled={!prevLink}
            >
              Previous page
            </Link>
            <Link
              href={nextLink}
              className='join-item btn btn-xs btn-outline'
              disabled={!nextLink}
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

Dashboard.layout = page => (
  <LogedLayouts title={`Dashboard Masyarakat`}>
    <Seo title={`Dashboard Masyarakat`} />
    {page}
  </LogedLayouts>
);

export default Dashboard;
