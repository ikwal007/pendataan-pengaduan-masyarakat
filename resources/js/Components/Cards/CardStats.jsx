import React from "react";
import { TbReport, TbCalendarTime, TbChartArcs3, TbChecklist } from "react-icons/tb";
import { FaUserCog, FaUserFriends, FaUserTie, FaUsers } from "react-icons/fa";

const iconComponents = {
    TbReport: TbReport,
    TbCalendarTime: TbCalendarTime,
    TbChartArcs3: TbChartArcs3,
    TbChecklist: TbChecklist,
    FaUserCog: FaUserCog,
    FaUserFriends: FaUserFriends,
    FaUserTie: FaUserTie,
    FaUsers: FaUsers
};

export default function CardStats({
    statSubtitle,
    statTitle,
    statIconName,
    statIconColor,
}) {
    const IconComponent = iconComponents[statIconName];
    return (
        <>
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                {statSubtitle}
                            </h5>
                            <span className="font-semibold text-xl text-blueGray-700">
                                {statTitle}
                            </span>
                        </div>
                        <div className="relative w-auto pl-4 flex-initial">
                            <div
                                className={
                                    "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full " +
                                    statIconColor
                                }
                            >
                                {IconComponent && <IconComponent className='w-8 h-8' />}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
