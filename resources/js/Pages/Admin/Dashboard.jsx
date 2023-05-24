import Seo from "@/Components/Seo/Seo";
import LogedLayouts from "@/Layouts/loged-layouts";
import Table from "@/Components/Tabel/TabelAdminShowPemohon";
import React from "react";

const Dashboard = (props) => {
    return (
        <LogedLayouts>
            <Seo title={`Dashboard Admin`} />
            <section className="relative box-border p-5 md:py-20 md:px-10 lg:py-0 w-full">
                <div className="flex flex-wrap p-2 md:p-5 w-full bg-base-200 md:justify-between">
                    <div className="overflow-x-auto w-full">
                        <Table allPemohonans={props.allPemohonans.data} />
                    </div>
                </div>
            </section>
        </LogedLayouts>
    );
};

export default Dashboard;
