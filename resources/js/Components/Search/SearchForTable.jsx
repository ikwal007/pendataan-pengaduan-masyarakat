import axios from "axios";
import React, { useDeferredValue, useEffect, useState } from "react";

const SearchForTable = ({ setResults, data }) => {
  const [keyword, setKeyword] = useState("");
  const deferredSearch = useDeferredValue(keyword);

  useEffect(() => {
    if (deferredSearch !== "") {
      search();
    } else {
      setResults([]);
    }
  }, [deferredSearch]);

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  const search = () => {
    const apiUrl = data
      ? `/api/user/search?keyword=${deferredSearch}`
      : `/api/pemohons/search?keyword=${deferredSearch}`;

    axios
      .get(apiUrl)
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
