import supportedChains from './chains'
import {IChainData} from './types'
import Web3 from "web3"

export function getChainData(chainId?: number): IChainData {
    if (!chainId) {
        return null
    }
    const chainData = supportedChains.filter(
        (chain: any) => chain.chain_id === chainId
    )[0]

    if (!chainData) {
        throw new Error('ChainId missing or not supported')
    }

    const API_KEY = getInfuraID();

    if (
        chainData.rpc_url.includes('infura.io') &&
        chainData.rpc_url.includes('%API_KEY%') &&
        API_KEY
    ) {
        const rpcUrl = chainData.rpc_url.replace('%API_KEY%', API_KEY)

        return {
            ...chainData,
            rpc_url: rpcUrl,
        }
    }

    return chainData
}

export function ellipseAddress(address = '', width = 10): string {
    if (!address) {
        return ''
    }
    return `${address.slice(0, width)}...${address.slice(-width)}`
}


export function getBalance(_address, _web3): Promise<string> {
    return new Promise((resolve, reject) => {
        _web3.eth.getBalance(_address).then(result => {
            const ethBalance = _web3.utils.fromWei(result, "ether");
            console.log("last result ", ethBalance);
            resolve(ethBalance);
        });
    })
}

export function getWeb3(_provider): Web3 {
    return new Web3(_provider);
}

export function getInfuraID(): string {
    return "460f40a260564ac4a4f4b3fffb032dad";
}
