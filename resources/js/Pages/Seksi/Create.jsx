import LogedLayouts from "@/Layouts/loged-layouts";
import { Head, router } from "@inertiajs/react";
import React, { useState } from "react";

const Page = (props) => {
    const [selectedKecamatan, setSelectedKecamatan] = useState(null);
    const [selectedJenisPengaduan, setSelectedJenisPengaduan] = useState(null);
    const [form, setForm] = useState(false);
    const [formData, setFormData] = useState({
        jenis_pengaduan: "",
        jenis_media_pengaduan: "",
        nama_pemohon: "",
        no_nik: "",
        no_hak: "",
        jenis_sertifikat: "",
        keterangan_laporan_pengaduan: "",
        seksi_survei_dan_pemetaan: false,
        seksi_penataan_dan_pemberdayaan: false,
        seksi_pengendalian_dan_penanganan_sengketa: false,
        seksi_penetapan_hak_dan_pendaftaran: false,
        seksi_pengadaan_tanah_dan_pengembangan: false,
        kecamatan: "",
        desa: "",
    });

    console.log(formData);

    const handleFormData = (e) => {
        const { id, value, checked, type } = e.target;
        const newValue = type === "checkbox" ? checked : value;
        setFormData((values) => ({
            ...values,
            [id]: newValue,
        }));
    };

    const handleKecamatanChange = (event) => {
        const key = event.target.id;
        const selectedKecamatanId = event.target.value;
        const selectedDesa = props.kecamatan.find(
            (desa) => desa.id === String(selectedKecamatanId)
        );
        setSelectedKecamatan(selectedDesa);
        setFormData((values) => ({
            ...values,
            [key]: selectedKecamatanId,
        }));
    };

    const handleJenisPengaduanChange = (event) => {
        const key = event.target.id;
        const selectedJenisPengaduan = event.target.value;
        setSelectedJenisPengaduan(selectedJenisPengaduan);
        setFormData((values) => ({
            ...values,
            [key]: selectedJenisPengaduan,
        }));
        selectedJenisPengaduan !=
        props.jenisPengaduan.pengecualianJenisPengaduan.id
            ? setForm(true)
            : setForm(false);
    };

    const getKelurahanOptions = () => {
        if (!selectedKecamatan) {
            return [];
        }
        return selectedKecamatan.desa.map((desa) => (
            <option key={desa.id} value={desa.id}>
                {desa.nama_desa}
            </option>
        ));
    };

    function handleSubmit(e) {
        e.preventDefault();
        router.post("/admin/pemohon", formData);
    }

    return (
        <LogedLayouts props={props}>
            <Head>
                <title>Input Pemohon</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section className="relative box-border p-5 md:py-20 md:px-10 lg:py-0 w-full">
                <form
                    className="flex flex-wrap p-2 md:p-5 w-full bg-base-200 md:justify-between space-y-6"
                    onSubmit={handleSubmit}
                >
                    <h1 className="md:w-full">Form Input Pengaduan</h1>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Jenis Pengaduan</span>
                        </label>
                        <select
                            id="jenis_pengaduan"
                            className="select select-bordered"
                            onChange={handleJenisPengaduanChange}
                        >
                            <option disabled selected>
                                Jenis Pengaduan
                            </option>
                            {props.jenisPengaduan.semuaJenisPengaduan.map(
                                (data, i) => {
                                    return (
                                        <option key={i} value={data.id}>
                                            {data.jenis_pengaduan}
                                        </option>
                                    );
                                }
                            )}
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">
                                Jenis Media Pengaduan
                            </span>
                        </label>
                        <select
                            id="jenis_media_pengaduan"
                            className="select select-bordered"
                            onChange={handleFormData}
                        >
                            <option disabled selected>
                                Jenis Media Pengaduan
                            </option>
                            {props.jenisMediaPengaduan.map((data, i) => {
                                return (
                                    <option key={i} value={data.id}>
                                        {data.nama_media_pengaduan}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Nama Pemohon</span>
                        </label>
                        <input
                            id="nama_pemohon"
                            onChange={handleFormData}
                            value={formData.nama_pemohon}
                            type="text"
                            placeholder="Masukkan Nama Pemohon"
                            className="input input-bordered w-full max-w-xs"
                        />
                        {/* <label className="label">
                            <span className="label-text-alt">
                                Bottom Left label
                            </span>
                        </label> */}
                    </div>
                    {form == true ? (
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">No KTP</span>
                            </label>
                            <input
                                id="no_nik"
                                onChange={handleFormData}
                                value={formData.no_nik}
                                type="number"
                                placeholder="Masukan NIK Pemohon"
                                className="input input-bordered w-full max-w-xs"
                            />
                            {/* <label className="label">
                                <span className="label-text-alt">
                                    Bottom Left label
                                </span>
                            </label> */}
                        </div>
                    ) : null}

                    {form == true ? (
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">No Hak</span>
                            </label>
                            <input
                                id="no_hak"
                                onChange={handleFormData}
                                value={formData.no_hak}
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-xs"
                            />
                            {/* <label className="label">
                                <span className="label-text-alt">
                                    Bottom Left label
                                </span>
                                <span className="label-text-alt">
                                    <button className="btn btn-info text-base-100">
                                        Validation No Hak
                                    </button>
                                </span>
                            </label> */}
                        </div>
                    ) : null}
                    {form == true ? (
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">
                                    Jenis Sertifikat
                                </span>
                            </label>
                            <select
                                id="jenis_sertifikat"
                                onChange={handleFormData}
                                className="select select-bordered"
                            >
                                <option disabled selected>
                                    Jenis Hak
                                </option>
                                {props.jenisSertifikat.map((data, i) => {
                                    return (
                                        <option key={i} value={data.id}>
                                            {data.jenis_sertifikat}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    ) : null}
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">
                                Keterangan Laporan Pengaduan
                            </span>
                        </label>
                        <textarea
                            id="keterangan_laporan_pengaduan"
                            className="textarea textarea-bordered h-24"
                            placeholder="Keterangan Laporan Pengaduan"
                            value={formData.keterangan_laporan_pengaduan}
                            onChange={handleFormData}
                        />
                    </div>
                    {form == true ? (
                        <div className="form-control flex-row flex-wrap justify-between">
                            <span className="label-text w-full">
                                Penanganan
                            </span>
                            {props.seksi.map((data, i) => {
                                return (
                                    <label
                                        className="label cursor-pointer space-x-3 w-2/5"
                                        key={i}
                                    >
                                        <span className="label-text">
                                            {data.nama_seksi}
                                        </span>
                                        <input
                                            id={`${data.nama_seksi.replace(
                                                / /g,
                                                "_"
                                            )}`}
                                            type="checkbox"
                                            className="checkbox"
                                            onChange={handleFormData}
                                        />
                                    </label>
                                );
                            })}
                        </div>
                    ) : null}

                    {form == true ? (
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Kecamatan</span>
                            </label>
                            <select
                                id="kecamatan"
                                className="select select-bordered"
                                onChange={handleKecamatanChange}
                            >
                                <option disabled selected>
                                    Kecamatan
                                </option>
                                {props.kecamatan.map((data, i) => {
                                    return (
                                        <option key={i} value={data.id}>
                                            {data.nama_kecamatan}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                    ) : null}
                    {form == true ? (
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Kelurahan</span>
                            </label>
                            <select
                                id="desa"
                                className="select select-bordered"
                                disabled={!selectedKecamatan}
                                onChange={handleFormData}
                            >
                                <option disabled selected>
                                    Kelurahan
                                </option>
                                {getKelurahanOptions()}
                            </select>
                        </div>
                    ) : null}
                    <div className="w-full">
                        <button className="mt-3 btn btn-success text-base-100">
                            Upload
                        </button>
                    </div>
                </form>
            </section>
        </LogedLayouts>
    );
};

export default Page;
