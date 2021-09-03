import React from "react";

const SearchBox = (props) => {
  const { value, onChange } = props;
  return (
    <input
      type="text"
      name="query"
      className="form-control my-3"
      placeholden="Search..."
      value={value}
      onChange={(e) => onChange(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
