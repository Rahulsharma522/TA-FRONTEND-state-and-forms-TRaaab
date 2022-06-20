import React from 'react';

function AllCatagory(props) {
  var allCatagory = props.allItems;

  return (
    <>
      <div className="all-item">
        {allCatagory.map((each) => (
          <div className="single-item" key={each.id}>
            <div className="img-div">
              <img src={each.img} alt={each.title} />
            </div>
            <div>
              <h2 className="title">{each.title}</h2>
              <span>Price: ${each.price}</span>
              <p>{each.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default AllCatagory;