import React, { useState, useEffect } from 'react';
import { Link, usePage } from '@inertiajs/react';
import { BiCheck } from 'react-icons/bi';

import Seo from '@/Components/Seo/Seo';
import LogedLayouts from '@/Layouts/loged-layouts';
import { SearchForTable as SFT } from '@/Components/Search/SearchForTable';
import Table from '@/Components/Tabel/Tabel';

const Dashboard = props => {
  const { flash, dataForTable } = usePage().props;
  const [results, setResults] = useState([]);
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
            <SFT
              data={props.dataForTable.data[0].name}
              setResults={setResults}
            />
            <Table results={results} dataForTable={dataForTable.data}>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th></Table.Th>
                  <Table.Th>Nama</Table.Th>
                  <Table.Th>Email</Table.Th>
                  <Table.Th>Action</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {dataForTable.data
                  ? dataForTable.data.map((data, i) => {
                      return (
                        <Table.Tr key={i}>
                          <Table.Td>{i + 1}</Table.Td>
                          <Table.Td>{data.name}</Table.Td>
                          <Table.Td>{data.email}</Table.Td>
                          <Table.Td>
                            <Table.Link
                              href={route(`super-admin.edit`, [data.id])}
                            >
                              Edit Password
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
                  href={props.dataForTable.prev_page_url}
                  className='join-item btn btn-xs btn-outline'
                  disabled={!props.dataForTable.prev_page_url}
                >
                  Previous page
                </Link>
                <Link
                  href={props.dataForTable.next_page_url}
                  className='join-item btn btn-xs btn-outline'
                  disabled={!props.dataForTable.next_page_url}
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
  <LogedLayouts>
    <Seo title={`Dashboard Super Admin`} />
    {page}
  </LogedLayouts>
);

export default Dashboard;
