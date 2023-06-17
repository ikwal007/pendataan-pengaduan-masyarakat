import React from "react";
import CardStats from "../Cards/CardStats";
import { usePage } from "@inertiajs/react";

export default function HeaderStats() {
    const { dataForStats } =usePage().props
    return (
        <div className="relative bg-gradient-to-r from-[#355D32] via-[#64903B] to-[#355D32] md:pt-32 pb-32 pt-12">
            <div className="px-4 md:px-10 mx-auto w-full">
                <div>
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats
                                statSubtitle={!dataForStats.pengaduan ? 'all user' : 'pengaduan'}
                                statTitle={dataForStats.pengaduan || dataForStats.allUser}
                                statIconName={!dataForStats.pengaduan ? 'FaUserFriends' : "TbReport"}
                                statIconColor="bg-red-500"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats
                                statSubtitle={!dataForStats.pending ? 'super admin' : 'pending'}
                                statTitle={dataForStats.pending || dataForStats.superAdmin}
                                statIconName={!dataForStats.pending ? 'FaUserCog' : "TbCalendarTime"}
                                statIconColor="bg-orange-500"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats
                                statSubtitle={!dataForStats.prosesing ? 'seksi' : 'prosesing'}
                                statTitle={dataForStats.prosesing || dataForStats.seksi}
                                statIconName={!dataForStats.prosesing ? 'FaUserTie' : "TbChartArcs3"}
                                statIconColor="bg-red-500"
                            />
                        </div>
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <CardStats
                                statSubtitle={!dataForStats.finis ? 'masyarakat' : 'finis'}
                                statTitle={dataForStats.finis || dataForStats.masyarakat}
                                statIconName={!dataForStats.finis ? 'FaUsers' : "TbChecklist"}
                                statIconColor="bg-teal-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
