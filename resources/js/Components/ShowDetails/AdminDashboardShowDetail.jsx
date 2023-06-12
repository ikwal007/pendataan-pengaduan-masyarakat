import React from "react";
import { AiFillCaretLeft } from "react-icons/ai";

const AdminDashboardShowDetail = ({ datas }) => {
    const status = datas.status.status;

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
                                Nama Pemohon:{" "}
                                <span className="text-2xl pl-3 leading-relaxed text-black uppercase">
                                    {datas.nama_pemohon
                                        ? datas.nama_pemohon
                                        : null}
                                </span>
                            </h3>
                        </blockquote>

                        <div className="mt-6 lg:mt-auto">
                            <h3 className="mt-2">
                                {" "}
                                isi pengaduan :{" "}
                                <span className="pl-3 text-base capitalize">
                                    {datas.keterangan_pengaduan_pemohon
                                        ? datas.keterangan_pengaduan_pemohon
                                        : null}
                                </span>
                            </h3>

                            {datas.penanganan.length > 0 ? (
                                <h3 className="mt-2">
                                    Yang menangani :{" "}
                                    <span className="pl-3 text-base text-gray-600">
                                        {datas.penanganan.length > 0 &&
                                            datas.penanganan.map((data, i) => (
                                                <React.Fragment key={i}>
                                                    <span>
                                                        {data.seksi.nama_seksi}
                                                    </span>
                                                    {datas.penanganan.length -
                                                        1 !==
                                                        i && (
                                                        <span>
                                                            ,<br />
                                                        </span>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                    </span>
                                </h3>
                            ) : null}

                            {datas.no_hak ? (
                                <p className="mt-2 capitalize">
                                    no hak : {datas.no_hak}
                                </p>
                            ) : null}
                            <p className="mt-2 capitalize">
                                jenis pengaduan :{" "}
                                {datas.jenis_pengaduan.jenis_pengaduan}
                            </p>
                            <p className="mt-2 capitalize">
                                jenis media pengaduan :{" "}
                                {
                                    datas.jenis_media_pengaduan
                                        .nama_media_pengaduan
                                }
                            </p>
                            {datas.kecamatan_id ? (
                                <p className="mt-2 capitalize">
                                    kecamatan : {datas.kecamatan.nama_kecamatan}
                                </p>
                            ) : null}
                            {datas.desa_id ? (
                                <p className="mt-2 capitalize">
                                    desa : {datas.desa.nama_desa}
                                </p>
                            ) : null}
                            <p className="mt-2 capitalize">Peroses :</p>
                            <ul className="steps steps-vertical ml-20 capitalize">
                                <li
                                    className={`step ${isStepSuccess(status, [
                                        "pending",
                                        "prosesing",
                                        "finis",
                                    ])}`}
                                >
                                    dalam antrian pengaduan
                                </li>
                                <li
                                    className={`step ${isStepSuccess(status, [
                                        "prosesing",
                                        "finis",
                                    ])}`}
                                >
                                    sedang diproses
                                </li>
                                <li
                                    className={`step ${isStepSuccess(status, [
                                        "finis",
                                    ])}`}
                                >
                                    Selesai
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { AdminDashboardShowDetail };
