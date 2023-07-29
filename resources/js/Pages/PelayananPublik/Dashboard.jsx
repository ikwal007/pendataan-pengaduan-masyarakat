import Seo from '@/Components/Seo/Seo';
import LogedLayouts from '@/Layouts/loged-layouts';
import { SearchForTable as SFT } from '@/Components/Search/SearchForTable';
import React, { useDeferredValue, useEffect, useState } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { BiCheck } from 'react-icons/bi';
import Table from '@/Components/Tabel/Tabel';

const Dashboard = props => {
  const { flash, dataForTable } = usePage().props;
  const [results, setResults] = useState([]);
  const [showFlash, setShowFlash] = useState(false);
  const [keyword, setKeyword] = useState('');
  const deferredSearch = useDeferredValue(keyword);

  useEffect(() => {
    if (deferredSearch !== '') {
      search();
    } else {
      setResults([]);
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
    const apiUrl = `/api/pemohons/search?keyword=${deferredSearch}`;

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

  console.log(dataForTable);

  return (
    <>
      <section className='relative box-border p-5 md:py-20 md:px-10 lg:py-0 w-full'>
        <div className='flex flex-wrap p-2 md:p-5 w-full bg-base-200 md:justify-between'>
          <div className='overflow-x-auto w-full bg-white p-3 rounded-xl'>
            {showFlash && flash.message && (
              <div className='alert alert-success my-3'>
                <BiCheck />
                <span>{flash.message}</span>
              </div>
            )}
            <SFT keyword={keyword} setKeyword={setKeyword} />
            <Table results={results} dataForTable={dataForTable.data}>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th></Table.Th>
                  <Table.Th>Nama Pemohon</Table.Th>
                  <Table.Th>NIK</Table.Th>
                  <Table.Th>Status</Table.Th>
                  <Table.Th>Action</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {results.length > 0 ? (
                  results.map((data, i) => {
                    return (
                      <Table.Tr key={i}>
                        <Table.Td>{i + 1}</Table.Td>
                        <Table.Td>
                          {data.nama_pemohon ? data.nama_pemohon : '-'}
                        </Table.Td>
                        <Table.Td>{data.nik ? data.nik : `-`}</Table.Td>
                        <Table.Td>
                          {data.status.status ? data.status.status : `-`}
                        </Table.Td>

                        <Table.Td>
                          <Table.Link
                            href={route(`pelayanan-publik.show`, [data.id])}
                          >
                            Show Details
                          </Table.Link>
                        </Table.Td>
                      </Table.Tr>
                    );
                  })
                ) : dataForTable.data.length > 0 ? (
                  dataForTable.data.map((data, i) => {
                    return (
                      <Table.Tr key={i}>
                        <Table.Td>{i + 1}</Table.Td>
                        <Table.Td>
                          {data.nama_pemohon ? data.nama_pemohon : '-'}
                        </Table.Td>
                        <Table.Td>{data.nik ? data.nik : `-`}</Table.Td>
                        <Table.Td>
                          {data.status.status ? data.status.status : `-`}
                        </Table.Td>
                        <Table.Td>
                          <Table.Link
                            href={route(`pelayanan-publik.show`, [data.id])}
                          >
                            Show Details
                          </Table.Link>
                        </Table.Td>
                      </Table.Tr>
                    );
                  })
                ) : (
                  <Table.Tr>
                    <Table.Td
                      className='capitalize'
                      colSpan={5}
                      align={`center`}
                    >
                      Data pemohon tidak tersedia
                    </Table.Td>
                  </Table.Tr>
                )}
              </Table.Tbody>
            </Table>
            {results.length === 0 || dataForTable.data.length === 0 && (
              <div className='join grid grid-cols-2 max-w-[250px] mt-3'>
                <Link
                  href={dataForTable.prev_page_url}
                  className='join-item btn btn-xs btn-outline'
                  disabled={!dataForTable.prev_page_url}
                >
                  Previous page
                </Link>
                <Link
                  href={dataForTable.next_page_url}
                  className='join-item btn btn-xs btn-outline'
                  disabled={!dataForTable.next_page_url}
                >
                  Next
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

Dashboard.layout = page => (
  <LogedLayouts title={`Dashboard Pelayanan Publik`}>
    <Seo title={`Dashboard Pelayanan Publik`} />
    {page}
  </LogedLayouts>
);

export default Dashboard;
