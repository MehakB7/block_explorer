import React from "react";

const TransectionListItem = ({ id, from, to, amount, time }) => {
  return (
    <div className="list_wrapper">
      <img src="" alt="script icon" />
      <div onClick className="list_item">
        <span>{id}</span>
        <span>{time}</span>
      </div>
      <div onClick className="list_item">
        <span>From: {from}</span>
        <span>To :{to}</span>
      </div>
      <span> {amount}</span>
    </div>
  );
};

export default TransectionListItem;
