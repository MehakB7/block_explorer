import React, { useEffect, useState } from "react";
import BlockListItem from "../components/BlockListItem";
import { useAlchemyContext } from "../context/Alchemy";
import "./list.css";

function BlockList({ blockNumber }) {
  const { alchemy } = useAlchemyContext();
  const [blockData, setBlockData] = useState([]);

  useEffect(() => {
    const getBlocksInfo = async () => {
      let response = await Promise.all(
        Array(5)
          .fill(0)
          .map((item, index) => {
            return alchemy.core.getBlock(blockNumber - index);
          })
      );

      setBlockData(
        response.map((item) => ({
          miner: item.miner,
          id: item.number,
          transections: item.transactions.length,
          timestamp: item.timestamp,
        }))
      );
    };
    getBlocksInfo();
  }, [blockNumber, alchemy]);

  return (
    <div className="list">
      <h3> Latest Blocks</h3>
      <div>
        {blockData.map((item, index) => (
          <BlockListItem {...item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default BlockList;
