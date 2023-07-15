import { SearchForTable } from '@/Components/Search/SearchForTable';
import Seo from '@/Components/Seo/Seo';
import Table from '@/Components/Tabel/Tabel';
import LogedLayouts from '@/Layouts/loged-layouts';
import { Link, usePage } from '@inertiajs/react';
import React, { useDeferredValue, useEffect, useState } from 'react';

const Dashboard = () => {
  const { flash, dataForTable } = usePage().props;
  const { keyword, setKeyword } = useState();
  const [results, setResults] = useState([]);
  const [showFlash, setShowFlash] = useState(false);
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
    const apiUrl = `/api/user/search?keyword=${deferredSearch}`;

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
    <section className='relative box-border p-5 md:py-20 md:px-10 lg:py-0 w-full'>
      <div className='flex flex-wrap p-2 md:p-5 w-full bg-base-200 md:justify-between'>
        <div className='overflow-x-auto w-full bg-white p-3 rounded-xl'>
          {showFlash && flash.message && (
            <div className='alert alert-success my-3'>
              <BiCheck />
              <span>{flash.message}</span>
            </div>
          )}
          <SearchForTable keyword={keyword} setKeyword={setKeyword} />
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
              {dataForTable.data
                ? dataForTable.data.map((data, i) => {
                    return (
                      <Table.Tr key={i}>
                        <Table.Td>{i + 1}</Table.Td>
                        <Table.Td>{data.no_hak}</Table.Td>
                        <Table.Td>{data.status.status}</Table.Td>
                        <Table.Td>
                          <Table.Link
                            href={route(`masyarakat.show`, [data.id])}
                          >
                            Show Detail
                          </Table.Link>
                        </Table.Td>
                      </Table.Tr>
                    );
                  })
                : null}
            </Table.Tbody>
          </Table>
          {results.length === 0 && (
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
  );
};

Dashboard.layout = page => (
  <LogedLayouts title={`Dashboard Masyarakat`}>
    <Seo title={`Dashboard Masyarakat`} />
    {page}
  </LogedLayouts>
);

export default Dashboard;
