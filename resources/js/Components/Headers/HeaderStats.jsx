import React from "react";
import CardStats from "../Cards/CardStats";

// components

export default function HeaderStats({ props }) {
    return (
        <div className="relative bg-gradient-to-r from-[#355D32] via-[#64903B] to-[#355D32] md:pt-32 pb-32 pt-12">
            <div className="px-4 md:px-10 mx-auto w-full">
                <div>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats
                                statSubtitle="pengaduan"
                                statTitle={props.countAllPemohons}
                                statIconName="TbReport"
                                statIconColor="bg-red-500"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats
                                statSubtitle="pending"
                                statTitle={props.countAllPemohons}
                                statIconName="TbCalendarTime"
                                statIconColor="bg-orange-500"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats
                                statSubtitle="prosesing"
                                statTitle={props.countAllPemohons}
                                statIconName="TbChartArcs3"
                                statIconColor="bg-red-500"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats
                                statSubtitle="finis"
                                statTitle={props.countAllPemohons}
                                statIconName="TbChecklist"
                                statIconColor="bg-teal-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
