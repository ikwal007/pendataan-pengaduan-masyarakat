import { Head } from "@inertiajs/react";
import React from "react";

const Seo = ({props, title}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta
                name="description"
                content="Website pelaporan pemohonan untuk keluhan pada kantor badan pertanahan nasional daerah banda aceh."
            />
            <meta
                name="keywords"
                content="portofolio, programmer web developer, pengembang web, situs web responsif, aplikasi web interaktif"
            />
            <meta name="author" content="Muhammad Ikwal Ramadhan" />
            <meta
                property="og:title"
                content="website permohonan laporan - BPN banda aceh"
            />
            <meta
                property="og:description"
                content="Website pelaporan pemohonan untuk keluhan pada kantor badan pertanahan nasional daerah banda aceh."
            />
            <meta property="og:image" content="/favicon.ico" />
            <meta property="og:url" content="https://pendataan-pengaduan-app.test/" />
            <meta
                name="twitter:title"
                content="website permohonan laporan - BPN banda aceh"
            />
            <meta
                name="twitter:description"
                content="Website pelaporan pemohonan untuk keluhan pada kantor badan pertanahan nasional daerah banda aceh."
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default Seo;
