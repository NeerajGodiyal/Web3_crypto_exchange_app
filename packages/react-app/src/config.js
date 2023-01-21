import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "ur contract address"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "ur goerli url",
  },
};
