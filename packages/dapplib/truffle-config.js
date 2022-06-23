require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clock bottom slab green rare remember promote guess enroll olympic genuine'; 
let testAccounts = [
"0x66d499e626d3d0d588ee982c645a1df337a2636ce59e6bab839e5256fa09ca81",
"0x3b51a65da57f52802e432e36a2549ce21dd37426779ad4d916fe5bafae371fde",
"0xd36cc989fce0ae335cb1195717032f9c64ec03ef97992cd5396d29f4b4580213",
"0xaff515c1d3d9de80dd7e09a885622c96c484ee7eb18bec70ac9ac98491c29b2a",
"0xf5c05b70365cd42b0c6d5764408ac0821534f0c5ef3738476f8390c8fa8f0203",
"0x20eed98f6d14ba61a4efec32b7cf5942e903de593666a66d06e95a3f2cb946cc",
"0x9be7bae965f6ce2b530eabed485545efea67dbdae3482406bb7273891dcd2ae2",
"0x521a0a8e78208a63e20380c62a1d253af38f631c2c268e2433fedb3d43814ac7",
"0x7484aa533bb4a12431ad913d049f68a4da3c8165d2ebc1df3115324b53312cb6",
"0xc4365a4e0237bc19531e05f490c976e5428beb83a0e9b31f65121feacf510fbc"
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


