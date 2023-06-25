import Seo from "@/Components/Seo/Seo";
import LogedLayouts from "@/Layouts/loged-layouts";
import { SearchForTable as SFT } from "@/Components/Search/SearchForTable";
import React, { useState } from "react";

const Index = (props) => {
    const [results, setResults] = useState([]);
    return (
        <LogedLayouts title={`Dashboard Seksi`} >
            <Seo title={`Dashboard Seksi`} />
            <section className="relative box-border p-5 md:py-20 md:px-10 lg:py-0 w-full">
                <div className="flex flex-wrap p-2 md:p-5 w-full bg-base-200 md:justify-between">
                    <div className="overflow-x-auto w-full bg-white p-3 rounded-xl">
                        <SFT setResults={setResults} />
                        {/* <Table results={results} dataForTable={props.dataForTable.data} /> */}
                    </div>
                </div>
            </section>
        </LogedLayouts>
    );
};

export default Index;
