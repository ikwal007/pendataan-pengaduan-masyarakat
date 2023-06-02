import { Link } from "@inertiajs/react";
import React from "react";

const TabelAdminShowPemohon = ({allPemohonans}) => {
    return (
        <table className="table w-full">
            {/* head */}
            <thead>
                <tr>
                    <th></th>
                    <th>Nama Pemohon</th>
                    <th>Nik</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {allPemohonans.length < 0
                    ? null
                    : allPemohonans.map((data, i) => {
                          return (
                              <tr className="hover" key={i}>
                                  <th>{i + 1}</th>
                                  <td>{data.nama_pemohon}</td>
                                  <td>
                                      {data.nik}
                                  </td>
                                  <td>
                                      <Link href={`/dashboard/${data.id}`} className="badge text-white badge-success gap-2">
                                          Lihat Info Lebih
                                      </Link>
                                  </td>
                              </tr>
                          );
                      })}
            </tbody>
        </table>
    );
};

export {TabelAdminShowPemohon};
