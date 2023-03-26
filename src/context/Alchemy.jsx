import React, { createContext, useContext } from "react";

import { Alchemy, Network } from "alchemy-sdk";

const AlchemyContext = createContext();

const settings = {
  apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

console.log("inside this settings", process.env.REACT_APP_ALCHEMY_API_KEY);
const alchemy = new Alchemy(settings);

export const AlchemyContextProvider = (props) => {
  return (
    <AlchemyContext.Provider value={{ alchemy }}>
      {props.children}
    </AlchemyContext.Provider>
  );
};

export const useAlchemyContext = () => {
  return useContext(AlchemyContext);
};
