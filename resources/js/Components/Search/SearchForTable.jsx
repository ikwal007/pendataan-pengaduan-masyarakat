import React from "react";

const SearchForTable = ({ keyword, setKeyword }) => {

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
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
