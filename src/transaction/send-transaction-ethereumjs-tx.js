import Web3 from 'web3';
import { Transaction } from 'ethereumjs-tx';

const url = 'https://rinkeby.infura.io/v3/apikey';

const web3 = new Web3(url);
// console.log(web3)

const addressFrom = '0x7229862e39F5E23Da58B1D1e7A20e1bc2D4BbfDD';
const addressTo = '0x36019EE29f5AC3fCCB2f2997c2d6358a1D5e6ae8';
const privateKey = Buffer.from('addressFrom privatekey', 'hex');

const main = async () => {
    const txCount = await web3.eth.getTransactionCount(addressFrom);
    const rawTx = {
        nonce: web3.utils.toHex(txCount),
        from: addressFrom,
        to: addressTo,
        value: web3.utils.toHex(web3.utils.toWei("0.11", "ether")),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'Gwei')),
    }

    const tx = new Transaction(rawTx, { chain:'rinkeby' });

    tx.sign(privateKey);

    const serializedTransaction = tx.serialize();

    const raw = `0x${serializedTransaction.toString('hex')}`

    const createReceipt = await web3.eth.sendSignedTransaction(raw);

    console.log(createReceipt.transactionHash);
};

main();