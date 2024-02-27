import detectEthereumProvider from "@metamask/detect-provider";

const ARTHERA_NETWORK_DETAILS = {
  mainnet: {
    chainId: "0x2802",
    chainName: "Arthera Mainnet",
    nativeCurrency: {
      name: "Arthera",
      symbol: "AA",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.arthera.net/"],
    blockExplorerUrls: [
      "https://explorer.arthera.net/",
      "https://arthera-testnet.socialscan.io/",
    ],
  },
  testnet: {
    chainId: "0x2803",
    chainName: "Arthera Testnet",
    nativeCurrency: {
      name: "Arthera",
      symbol: "AA",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-test.arthera.net/"],
    blockExplorerUrls: [
      "https://explorer-test.arthera.net",
      "https://arthera-testnet.socialscan.io/",
    ],
  },
  devnet: {
    chainId: "0x2805",
    chainName: "Arthera Devnet",
    nativeCurrency: {
      name: "Arthera",
      symbol: "AA",
      decimals: 18,
    },
    rpcUrls: ["https://rpc-dev.arthera.net/"],
    blockExplorerUrls: [
      "https://explorer-dev.arthera.net",
      "https://arthera-testnet.socialscan.io/",
    ],
  },
};

export async function addNetwork(network: string) {
  const provider = await detectEthereumProvider();
  if (provider) {
    try {
      await (window as any).ethereum.request({
        method: "wallet_addEthereumChain",
        params: [ARTHERA_NETWORK_DETAILS[network]],
      });
      console.log("added");
    } catch (addError) {
      console.error(addError);
    }
  }
}
