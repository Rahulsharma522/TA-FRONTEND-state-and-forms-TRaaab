import React from "react";

function Sidebar(props) {
  let sizes = props.products.reduce((acc, cv) => {
    acc = acc.concat(cv.availableSizes);
    return acc;
  }, []);
  let uniqueSizes = [...new Set(sizes)];
  let { selectedSizes } = props;
  return (
    <aside className="flex-20 sidebar">
      <h1>Sizes:-</h1>
      <div className="flex wrap">
        {uniqueSizes.map((size) => (
          <span
            key={size}
            onClick={() => props.handleClick(size)}
            className={`size ${selectedSizes.includes(size) ? "active" : ""}`}
          >
            {size}
          </span>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;