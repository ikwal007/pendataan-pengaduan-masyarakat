import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";

const AdminDashboardShowDetail = ({ datas }) => {
    const goBack = () => {
        window.history.back();
    };
    console.log(datas);
    return (
        <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                <button onClick={goBack} className="flex items-center my-3">
                    <AiFillCaretLeft /> Kembali
                </button>
                <div className="grid items-center grid-cols-1 lg:items-stretch md:grid-cols-2 gap-y-8 gap-x-12 xl:gap-x-20">
                    <div className="relative">
                        <div className="aspect-w-4 aspect-h-3">
                            <img
                                className="object-cover w-full h-full"
                                src="/assets/imgs/img1.jpg"
                                alt=""
                            />
                        </div>
                    </div>

                    <div className="flex flex-col justify-between md:py-5">
                        <blockquote>
                            <h3 className="text-xl font-semibold">
                                Nama Pemohon:
                            </h3>
                            <p className="text-2xl pl-3 leading-relaxed text-black">
                                {datas.nama_pemohon}
                            </p>
                        </blockquote>

                        <div className="mt-6 lg:mt-auto">
                            <h3 className="mt-2"> isi pengaduan : </h3>
                            <p className="pl-3 text-base capitalize">
                                {datas.keterangan_pengaduan_pemohon}
                            </p>
                            <h3 className="mt-2">Yang menangani :</h3>
                            <p className="pl-3 text-base text-gray-600">
                                {datas.penanganan.length > 0 &&
                                    datas.penanganan.map((data, i) => (
                                        <React.Fragment key={i}>
                                            <span>{data.seksi.nama_seksi}</span>
                                            {datas.penanganan.length - 1 !==
                                                i && (
                                                <span>
                                                    ,<br />
                                                </span>
                                            )}
                                        </React.Fragment>
                                    ))}
                            </p>
                            <p className="mt-2 capitalize">
                                no hak :{datas.no_hak}
                            </p>
                            <p className="mt-2 capitalize">
                                jenis pengaduan :
                                {datas.jenis_pengaduan.jenis_pengaduan}
                            </p>
                            <p className="mt-2 capitalize">
                                jenis media pengaduan :
                                {
                                    datas.jenis_media_pengaduan
                                        .nama_media_pengaduan
                                }
                            </p>
                            <p className="mt-2 capitalize">
                                kecamatan :{datas.kecamatan.nama_kecamatan}
                            </p>
                            <p className="mt-2 capitalize">
                                desa :{datas.desa.nama_desa}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { AdminDashboardShowDetail };
