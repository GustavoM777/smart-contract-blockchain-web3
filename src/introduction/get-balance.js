// https://mainnet.infura.io/v3/apikey
import Web3 from 'web3';

const web3 = new Web3('HTTP://127.0.0.1:7545');
const contractAddress = '0x61b5922F8587761507cAB4326855a14159F74f83';  

// console.log(web3);

const getBalance = async () => {
    const balance = await web3.eth.getBalance(contractAddress);
    const balanceFormat = web3.utils.fromWei(balance, 'ether');

    console.log(balanceFormat);
}

getBalance();