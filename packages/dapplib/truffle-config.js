require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside skull drift renew sad pudding grace forest equal genuine'; 
let testAccounts = [
"0x6c39afbeed451ec0934f9661fb3da0ab7409ba98b42e471d106a5b0818540d53",
"0x40b5b5fabaef288b6444fe289b79bb2881e89a00807d814fa47d46f41901147f",
"0x5737e392d520aa2117de290c163de237340415b15658179d1b92f8432cc26cab",
"0xc6db88a2dcc4b020d4d166977b38560a879ec59a9f7a18648fb6a1d8cadd670a",
"0x7741e65bd8514c2812b2a10cb11c041a6fb8340cc246f548653f7551293f4922",
"0x79b9500b6ee0f4c2c67c3929645fefcd41336661fd5d9d86fc411833e65ee8f7",
"0x2b8d4e2f95d5af66a925f68aa1d7c54a5e55078533fa5c8556c37e79fce577b9",
"0x521af0170c25bb88e5ceb36528488a0a201db699fc8ee6833657d0cf73725091",
"0xb47759e3a7a3b9c3e0353f912baf1552dc89de39d4fed4fa3a8a22a867552f14",
"0x68e05c005a3b7c48989fb441addeefb358c75bd45ee77fe2b45a712f598ab88d"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


