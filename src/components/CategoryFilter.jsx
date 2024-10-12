import React from "react";

function CategoryFilter({ setFilterCategory }) {
  return (
    <div className="category-filter">
      <select onChange={(e) => setFilterCategory(e.target.value)}>
        <option value="All">All</option>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Others">Others</option>
      </select>
    </div>
  );
}

export default CategoryFilter;
