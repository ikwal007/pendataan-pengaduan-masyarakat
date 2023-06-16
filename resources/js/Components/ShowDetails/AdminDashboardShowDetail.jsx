import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";

const AdminDashboardShowDetail = ({ datas }) => {
    const {
        nama_pemohon,
        name,
        keterangan_pengaduan_pemohon,
        email,
        status,
        penanganan,
        no_hak,
        jenis_pengaduan,
        jenis_media_pengaduan,
        kecamatan,
        desa,
    } = datas;

    const result = nama_pemohon || name || null;
    const result2 = keterangan_pengaduan_pemohon || email || null;

    const isStepSuccess = (status, successStatus) => {
        return successStatus.includes(status) ? "step-success" : null;
    };

    const goBack = () => {
        window.history.back();
    };

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
                                {!name ? "Nama Pemohon" : "Nama"}:{" "}
                                <span className="text-2xl pl-3 leading-relaxed text-black uppercase">
                                    {result}
                                </span>
                            </h3>
                        </blockquote>

                        <div className="mt-6 lg:mt-auto">
                            <h3 className="mt-2">
                                {!email ? "Isi Pengaduan" : "Email"} :{" "}
                                <span className="pl-3 text-base capitalize">
                                    {result2}
                                </span>
                            </h3>

                            {penanganan && penanganan.length > 0 && (
                                <h3 className="mt-2">
                                    Yang menangani :{" "}
                                    <span className="pl-3 text-base text-gray-600">
                                        {penanganan.map((data, i) => (
                                            <React.Fragment key={i}>
                                                <span>
                                                    {data.seksi.nama_seksi}
                                                </span>
                                                {penanganan.length - 1 !==
                                                    i && <br />}
                                            </React.Fragment>
                                        ))}
                                    </span>
                                </h3>
                            )}

                            {no_hak && (
                                <p className="mt-2 capitalize">
                                    no hak: {no_hak}
                                </p>
                            )}
                            {jenis_pengaduan && (
                                <p className="mt-2 capitalize">
                                    jenis pengaduan:{" "}
                                    {jenis_pengaduan.jenis_pengaduan}
                                </p>
                            )}
                            {jenis_media_pengaduan && (
                                <p className="mt-2 capitalize">
                                    jenis media pengaduan:{" "}
                                    {jenis_media_pengaduan.nama_media_pengaduan}
                                </p>
                            )}
                            {kecamatan && (
                                <p className="mt-2 capitalize">
                                    kecamatan: {kecamatan.nama_kecamatan}
                                </p>
                            )}
                            {desa && (
                                <p className="mt-2 capitalize">
                                    desa: {desa.nama_desa}
                                </p>
                            )}
                            {status && (<p className="mt-2 capitalize">Proses :</p>)}
                            {status && (
                                <ul className="steps steps-vertical ml-20 capitalize">
                                    <li
                                        className={`step ${isStepSuccess(
                                            status,
                                            ["pending", "prosesing", "finis"]
                                        )}`}
                                    >
                                        dalam antrian pengaduan
                                    </li>
                                    <li
                                        className={`step ${isStepSuccess(
                                            status,
                                            ["prosesing", "finis"]
                                        )}`}
                                    >
                                        sedang diproses
                                    </li>
                                    <li
                                        className={`step ${isStepSuccess(
                                            status,
                                            ["finis"]
                                        )}`}
                                    >
                                        Selesai
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { AdminDashboardShowDetail };
