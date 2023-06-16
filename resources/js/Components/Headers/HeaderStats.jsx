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
                                statSubtitle={!props.dataForStats.pengaduan ? 'all user' : 'pengaduan'}
                                statTitle={props.dataForStats.pengaduan || props.dataForStats.allUser}
                                statIconName={!props.dataForStats.pengaduan ? 'FaUserFriends' : "TbReport"}
                                statIconColor="bg-red-500"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats
                                statSubtitle={!props.dataForStats.pending ? 'super admin' : 'pending'}
                                statTitle={props.dataForStats.pending || props.dataForStats.superAdmin}
                                statIconName={!props.dataForStats.pending ? 'FaUserCog' : "TbCalendarTime"}
                                statIconColor="bg-orange-500"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats
                                statSubtitle={!props.dataForStats.prosesing ? 'seksi' : 'prosesing'}
                                statTitle={props.dataForStats.prosesing || props.dataForStats.seksi}
                                statIconName={!props.dataForStats.prosesing ? 'FaUserTie' : "TbChartArcs3"}
                                statIconColor="bg-red-500"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats
                                statSubtitle={!props.dataForStats.finis ? 'masyarakat' : 'finis'}
                                statTitle={props.dataForStats.finis || props.dataForStats.masyarakat}
                                statIconName={!props.dataForStats.finis ? 'FaUsers' : "TbChecklist"}
                                statIconColor="bg-teal-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
