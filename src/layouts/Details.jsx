import React, { useEffect, useState, useRef } from "react";
import { useAlchemyContext } from "../context/Alchemy";
import BlockList from "./BlockList";
import TransactionList from "./TransactionList";
import "./details.css";

const Details = () => {
  const { alchemy } = useAlchemyContext();

  const [blockNumber, setBlockNumber] = useState(0);

  const isDone = useRef(false);

  useEffect(() => {
    async function getBlockNumber() {
      const res = await alchemy.core.getBlockNumber();
      console.log("gett bloc", res);
      setBlockNumber(res);
      isDone.current = true;
    }
    if (!isDone.current) {
      getBlockNumber();
    }
  }, []);

  return (
    <div className="details_wrapper">
      <BlockList blockNumber={blockNumber} />
      <BlockList blockNumber={blockNumber} />
    </div>
  );
};

Details.propTypes = {};

export default Details;
