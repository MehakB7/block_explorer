import React from "react";
import { block } from "../helper/iconPath";
import "./listItem.css";

const BlockListItem = ({ id, miner, transections, timestamp }) => {
  return (
    <div className="list_wrapper">
      <div className="col_1">
        <div className="image_wrapper">
          <img className="image_icon" src={block} alt="script icon" />
        </div>

        <div className="list_item">
          <span className="address link">{id}</span>
          <span>{timestamp}</span>
        </div>
      </div>
      <div className="list_item">
        <span className="recipt_wrapper">
          Fee Recipient: <div className="address link">{miner}</div>
        </span>
        <span className="link">{transections}txns</span>
      </div>
      <div className="amount"> {"TBA"}</div>
    </div>
  );
};

export default BlockListItem;
