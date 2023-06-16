import Seo from "@/Components/Seo/Seo";
import LogedLayouts from "@/Layouts/loged-layouts";
import { TabelAdminShowPemohon as Table } from "@/Components/Tabel/TabelAdminShowPemohon";
import { SearchForTable as SFT } from "@/Components/Search/SearchForTable";
import React, { useState } from "react";
import { Link } from "@inertiajs/react";

const Dashboard = (props) => {
    const [results, setResults] = useState([]);
    console.log(results);
    return (
        <LogedLayouts props={props}>
            <Seo title={`Dashboard Admin`} />
            <section className="relative box-border p-5 md:py-20 md:px-10 lg:py-0 w-full">
                <div className="flex flex-wrap p-2 md:p-5 w-full bg-base-200 md:justify-between">
                    <div className="overflow-x-auto w-full bg-white p-3 rounded-xl">
                        <SFT
                            data={props.dataForTable.data[0].name}
                            setResults={setResults}
                        />
                        <Table
                            results={results}
                            dataForTable={props.dataForTable.data}
                        />
                        {results.length > 0 ? null : (
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
