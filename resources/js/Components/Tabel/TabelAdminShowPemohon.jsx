import { Link } from "@inertiajs/react";
import React from "react";

const TabelAdminShowPemohon = ({ allPemohons, results }) => {
    const renderPemohon = (data, index) => {
        return (
            <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{data.nama_pemohon}</td>
                <td>{data.nik}</td>
                <td>
                    <Link
                        href={`/dashboard/${data.id}`}
                        className="badge text-white badge-success gap-2"
                    >
                        Lihat Info Lebih
                    </Link>
                </td>
            </tr>
        );
    };

    return (
        <table className="table w-full">
            <thead>
                <tr>
                    <th></th>
                    <th>Nama Pemohon</th>
                    <th>Nik</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {results.length > 0
                    ? results.map((data, index) => renderPemohon(data, index))
                    : allPemohons.map((data, index) =>
                          renderPemohon(data, index)
                      )}
            </tbody>
        </table>
    );
};

export { TabelAdminShowPemohon };
