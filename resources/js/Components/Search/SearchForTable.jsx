import axios from "axios";
import React, { useEffect, useState } from "react";

const SearchForTable = ({ setResults }) => {
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        if (keyword !== "") {
            search();
        } else {
            setResults([]);
        }
    }, [keyword]);

    const handleInputChange = (e) => {
        setKeyword(e.target.value);
    };

    const search = () => {
        axios
            .get(`/api/pemohons/search?keyword=${keyword}`)
            .then((response) => {
                const data = response.data;
                setResults(data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="flex justify-end">
            <input
                type="text"
                placeholder="Search..."
                value={keyword}
                onChange={handleInputChange}
                className="input input-bordered input-success w-full max-w-xs"
            />
        </div>
    );
};

export { SearchForTable };
