import React from "react";
import "../App.css";

const List = ({ content, title, handleFunction }) => {
  return (
    <div>
      <h2>{title}</h2>
      <div className="my-list">
        {content.map((item) => (
          <div className="hover-div" key={item.id}>
            <h5>{item.title}</h5>
            <div>
              <img className="list-item-image" src={item.img} alt={item.title} />
            </div>
            <button className="list-item-button" id={item.id} onClick={() => handleFunction(item)}>
              {title === "Recommendations" ? "Add" : "Remove"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
