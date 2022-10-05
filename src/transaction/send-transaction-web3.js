import Web3 from 'web3';

const url = 'https://rinkeby.infura.io/v3/apikey';

const web3 = new Web3(url);

// console.log(web3)

const addressFrom = '0x36019EE29f5AC3fCCB2f2997c2d6358a1D5e6ae8';
const addressTo = '0x31725BD33C91c09C399A049Aa9D0B1dc76ace88e';
const privateKey = 'your privatekey'

const main = async () => {
    const tx = await web3.eth.accounts.signTransaction(
        {
            from: addressFrom,
            to: addressTo,
            value: web3.utils.toWei("0.05", "ether"),
            chain: "rinkeby",
            hardfork: "London",
            gas: "210000",
        },
        privateKey
    );

    console.log(tx.rawTransaction);

    const createReceipt = await web3.eth.sendSignedTransaction(tx.rawTransaction);

    console.log(createReceipt.transactionHash);
};

main();