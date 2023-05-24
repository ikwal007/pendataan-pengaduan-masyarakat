import React from "react";

const TabelAdminShowPemohon = ({allPemohonans}) => {
    return (
        <table className="table w-full">
            {/* head */}
            <thead>
                <tr>
                    <th></th>
                    <th>Nama Pemohon</th>
                    <th>Jenis Pengaduan</th>
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
                                      {data.jenis_pengaduan.jenis_pengaduan}
                                  </td>
                                  <td>
                                      <button className="badge text-white badge-success gap-2">
                                          Lihat Info Lebih
                                      </button>
                                  </td>
                              </tr>
                          );
                      })}
            </tbody>
        </table>
    );
};

export default TabelAdminShowPemohon;
