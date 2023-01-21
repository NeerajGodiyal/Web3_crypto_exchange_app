import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x3bF533Dd04abBF4eDE45F353764102aB66359557"; 

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/WUpfkNHSLy9pFj-Lo6FpyA_8KiLfIigq",
  },
};