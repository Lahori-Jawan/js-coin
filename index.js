// const { Blockchain, Transaction } = require("./src/blockchain");
import { Blockchain, Transaction } from "./src/blockchain";

let nkCoin = new Blockchain();
// nkCoin.addBlock(new Block('02/01/2021', { amount: 4 }));
nkCoin.createTransaction(new Transaction("address 1", "address 2", 100));
nkCoin.createTransaction(new Transaction("address 2", "address 1", 50));

nkCoin.minePendingTransactions("some-address");
console.log(
  `\nbalance of "some-address" is ${nkCoin.getBalanceOfAddress("some-address")}`
);

nkCoin.minePendingTransactions("some-address");
nkCoin.minePendingTransactions("some-address");
console.log(
  `\nbalance of "some-address" is ${nkCoin.getBalanceOfAddress("some-address")}`
);

// console.log(`\n chain: ${JSON.stringify(nkCoin.chain, null, 2)}`);
