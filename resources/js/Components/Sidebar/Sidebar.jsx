import React from "react";
import { MdClose, MdDashboard, MdOutlinePostAdd } from "react-icons/md";
import { Link, usePage } from "@inertiajs/react";

import UserDropdown from "../Dropdowns/UserDropdown";

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");
    const { auth } = usePage().props;

    const toggleCollapse = () => {
        setCollapseShow((prevState) =>
            prevState === "hidden" ? "bg-white m-2 py-3 px-6" : "hidden"
        );
    };

    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={toggleCollapse}
                    >
                        <MdDashboard className="fas fa-bars"></MdDashboard>
                    </button>
                    {/* Brand */}
                    <Link href="/">
                        <span
                            href="#pablo"
                            className="md:block text-left md:pb-2 text-black mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                        >
                            Home
                        </span>
                    </Link>
                    {/* User */}
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                            <UserDropdown />
                        </li>
                    </ul>
                    {/* Collapse */}
                    <div
                        className={`md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ${collapseShow}`}
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link href="/">
                                        <span
                                            href="#pablo"
                                            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                        >
                                            Pendataan Pengaduan
                                        </span>
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={toggleCollapse}
                                    >
                                        <MdClose />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Role-specific navigation */}
                        {auth.user.role === "Super_Admin" && (
                            <div>
                                {/* Divider */}
                                <hr className="my-4 md:min-w-full" />
                                {/* Heading */}
                                <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                                    Admin Pages
                                </h6>
                                {/* Navigation */}
                                <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                                    <li className="items-center">
                                        <Link href={route('super-admin.index')}>
                                            <span
                                                className={`flex text-xs uppercase py-3 font-bold ${
                                                    route().current(
                                                        "super-admin.*"
                                                    )
                                                        ? "text-success hover:text-success hover:opacity-50"
                                                        : "text-black hover:text-black hover:opacity-50"
                                                }`}
                                            >
                                                <MdDashboard
                                                    className={`mr-2 text-sm ${
                                                        route().current(
                                                            "super-admin.*"
                                                        )
                                                            ? "opacity-75"
                                                            : "text-black"
                                                    }`}
                                                />
                                                Dashboard
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {auth.user.role === "Pelayanan_Publik" && (
                            <div>
                                {/* Divider */}
                                <hr className="my-4 md:min-w-full" />
                                {/* Heading */}
                                <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                                    Pelayanan Publik
                                </h6>
                                {/* Navigation */}
                                <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                                    <li className="items-center">
                                        <Link href={route('pelayanan-publik.index')}>
                                            <span
                                                className={`flex text-xs uppercase py-3 font-bold ${
                                                    route().current("pelayanan-publik.index")
                                                        ? "text-success hover:text-success hover:opacity-50"
                                                        : "text-black hover:text-black hover:opacity-50"
                                                }`}
                                            >
                                                <MdDashboard
                                                    className={`mr-2 text-sm ${
                                                        route().current(
                                                            "pelayanan-publik.index"
                                                        )
                                                            ? "opacity-75"
                                                            : "text-black"
                                                    }`}
                                                />
                                                Dashboard
                                            </span>
                                        </Link>
                                    </li>
                                    <li className="items-center">
                                        <Link href={route('pelayanan-publik.create')}>
                                            <span
                                                className={`flex text-xs uppercase py-3 font-bold ${
                                                    route().current("pelayanan-publik.create")
                                                        ? "text-success hover:text-success hover:opacity-50"
                                                        : "text-black hover:text-black hover:opacity-50"
                                                }`}
                                            >
                                                <MdOutlinePostAdd
                                                    className={`mr-2 text-sm ${
                                                        route().current(
                                                            "pelayanan-publik.create"
                                                        )
                                                            ? "opacity-75"
                                                            : "text-black"
                                                    }`}
                                                />
                                                Create Permohonan
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {auth.user.role === "Seksi" && (
                            <div>
                                {/* Divider */}
                                <hr className="my-4 md:min-w-full" />
                                {/* Heading */}
                                <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                                    Seksi
                                </h6>
                                {/* Navigation */}
                                <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                                    <li className="items-center">
                                        <Link href={route('seksi.index')}>
                                            <span
                                                className={`flex text-xs uppercase py-3 font-bold ${
                                                    route().current("seksi.*")
                                                        ? "text-success hover:text-success hover:opacity-50"
                                                        : "text-black hover:text-black hover:opacity-50"
                                                }`}
                                            >
                                                <MdDashboard
                                                    className={`mr-2 text-sm ${
                                                        route().current(
                                                            "seksi.*"
                                                        )
                                                            ? "opacity-75"
                                                            : "text-black"
                                                    }`}
                                                />
                                                Dashboard
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}

                        {auth.user.role === "Masyarakat" && (
                            <div>
                                {/* Divider */}
                                <hr className="my-4 md:min-w-full" />
                                {/* Heading */}
                                <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                                    Masyarakat
                                </h6>
                                {/* Navigation */}
                                <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                                    <li className="items-center">
                                        <Link href={route('masyarakat.index')}>
                                            <span
                                                className={`flex text-xs uppercase py-3 font-bold ${
                                                    route().current(
                                                        "masyarakat.*"
                                                    )
                                                        ? "text-success hover:text-success hover:opacity-50"
                                                        : "text-black hover:text-black hover:opacity-50"
                                                }`}
                                            >
                                                <MdDashboard
                                                    className={`mr-2 text-sm ${
                                                        route().current(
                                                            "masyarakat.*"
                                                        )
                                                            ? "opacity-75"
                                                            : "text-black"
                                                    }`}
                                                />
                                                Dashboard
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}
