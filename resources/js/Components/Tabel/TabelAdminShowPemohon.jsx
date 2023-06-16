import { Link } from "@inertiajs/react";
import React from "react";

const TabelAdminShowPemohon = ({ dataForTable, results }) => {
    const renderPemohon = (data, index) => {
        return (
            <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{!data.nama_pemohon ? data.name : data.nama_pemohon}</td>
                {!data.nik ? (
                    <td>{data.email}</td>
                ) : (
                    <td>{!data.nik ? "-" : data.nik}</td>
                )}
                <td className="space-x-3">
                    {!data.nik ? (
                        <Link
                            href={`/super-admin/edit-user/${data.id}`}
                            className="badge text-white badge-warning gap-2"
                        >
                            Ubah Password
                        </Link>
                    ) : null}
                    {data.nik ? (
                        <Link
                            href={`/seksi/show-detail/${data.id}`}
                            className="badge text-white badge-warning gap-2"
                        >
                            Lihat Info Lebih
                        </Link>
                    ) : null}
                </td>
            </tr>
        );
    };

    return (
        <table className="table w-full">
            <thead>
                <tr>
                    <th></th>
                    <th>Nama</th>
                    <th>Nik</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {results.length > 0
                    ? results.map((data, index) => renderPemohon(data, index))
                    : dataForTable.map((data, index) =>
                          renderPemohon(data, index)
                      )}
            </tbody>
        </table>
    );
};

export { TabelAdminShowPemohon };
