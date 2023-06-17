import React, { useState, useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import { BiCheck } from "react-icons/bi";

import Seo from "@/Components/Seo/Seo";
import LogedLayouts from "@/Layouts/loged-layouts";
import { TabelAdminShowPemohon as Table } from "@/Components/Tabel/TabelAdminShowPemohon";
import { SearchForTable as SFT } from "@/Components/Search/SearchForTable";

const Dashboard = (props) => {
  const { flash } = usePage().props;
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

  return (
    <LogedLayouts title={`Dashboard Super Admin`}>
      <Seo title={`Dashboard Super Admin`} />
      <section className="relative box-border p-5 md:py-20 md:px-10 lg:py-0 w-full">
        <div className="flex flex-wrap p-2 md:p-5 w-full bg-base-200 md:justify-between">
          <div className="overflow-x-auto w-full bg-white p-3 rounded-xl">
            {showFlash && flash.message && (
              <div className="alert alert-success my-3">
                <BiCheck />
                <span>{flash.message}</span>
              </div>
            )}
            <SFT data={props.dataForTable.data[0].name} setResults={setResults} />
            <Table results={results} dataForTable={props.dataForTable.data} />
            {results.length === 0 && (
              <div className="join grid grid-cols-2 max-w-[250px] mt-3">
                <Link
                  href={props.dataForTable.prev_page_url}
                  className="join-item btn btn-xs btn-outline"
                  disabled={!props.dataForTable.prev_page_url}
                >
                  Previous page
                </Link>
                <Link
                  href={props.dataForTable.next_page_url}
                  className="join-item btn btn-xs btn-outline"
                  disabled={!props.dataForTable.next_page_url}
                >
                  Next
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </LogedLayouts>
  );
};

export default Dashboard;
