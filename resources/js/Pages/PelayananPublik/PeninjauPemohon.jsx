import Seo from '@/Components/Seo/Seo';
import Table from '@/Components/Tabel/Tabel';
import LogedLayouts from '@/Layouts/loged-layouts';
import { Link, usePage } from '@inertiajs/react';
import { BiCheck, BiEraser } from 'react-icons/bi';
import React, { useDeferredValue, useEffect, useState } from 'react';

const PeninjauwanPemohon = () => {
  const { flash, dataForTable } = usePage().props;
  const [ keyword, setKeyword ] = useState('');
  const [results, setResults] = useState([]);
  const [showFlash, setShowFlash] = useState(false);
  const deferredSearch = useDeferredValue(keyword);

  const handleInputChange = e => {
    setKeyword(e.target.value);
  };

  const handleInputClear = () => {
    setKeyword('');
    setResults([]);
  };

  useEffect(() => {
    if (deferredSearch.trim() == '') {
      setResults([]);
    } else {
      search();
    }
  }, [deferredSearch]);

  useEffect(() => {
    if (flash.message) {
      setShowFlash(true);
      const timer = setTimeout(() => {
        setShowFlash(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [flash.message]);

  const search = () => {
    const apiUrl = `/api/pemohons/belum-terhubung-penanganan?keyword=${deferredSearch}`;

    axios
      .get(apiUrl)
      .then(response => {
        const data = response.data;
        setResults(data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const rowTableByStatusComponents = data => {
    return (
      <>
        {data.map((data, i) => {
          return (
            <Table.Tr key={i}>
              <Table.Td>{i + 1}</Table.Td>
              <Table.Td>{data.nama_pemohon}</Table.Td>
              <Table.Td>{data.nik}</Table.Td>
              <Table.Td>{data.status.status}</Table.Td>
              <Table.Td>
                <Table.Link href={route(`pelayanan-publik.peninjauan-pemohon-edit`, [data.id])}>
                  Tambahkan Penanganan
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

  if (Array.isArray(results) && results.length === 0) {
    selectedData = dataForTable.data;
    prevLink = dataForTable.prev_page_url;
    nextLink = dataForTable.next_page_url;
  } else {
    selectedData = results;
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
          <div className='flex justify-end mb-2'>
              <div className='join'>
                <input
                  type='text'
                  placeholder='Search...'
                  value={keyword}
                  onChange={handleInputChange}
                  className='input input-bordered join-item input-success w-full max-w-xs'
                />
                <button
                  className='btn btn-success join-item rounded-r-full'
                  onClick={handleInputClear}
                >
                  <BiEraser className='text-white w-6 h-6' />
                </button>
              </div>
            </div>
          <Table results={results} dataForTable={dataForTable.data}>
            <Table.Thead>
              <Table.Tr>
                <Table.Th></Table.Th>
                <Table.Th>No Hak</Table.Th>
                <Table.Th>Status</Table.Th>
                <Table.Th>Action</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
            {selectedData.length > 0 ? (
                rowTableByStatusComponents(selectedData)
              ) : (
                <Table.Tr>
                  <Table.Td className='capitalize' colSpan={5} align='center'>
                    tidak ada data terkait untuk sekarang
                  </Table.Td>
                </Table.Tr>
              )}
            </Table.Tbody>
          </Table>
          {results.length === 0 && (
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
          )}
        </div>
      </div>
    </section>
  );
};

PeninjauwanPemohon.layout = page => (
  <LogedLayouts title={`Peninjauwan Pemohon`}>
    <Seo title={`Peninjauwan Pemohon`} />
    {page}
  </LogedLayouts>
);

export default PeninjauwanPemohon;
