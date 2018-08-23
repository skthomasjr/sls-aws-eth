const express = require('express');
const Web3 = require('web3');

const server = express()
  .get('/', async (req, res) => {
    const url = 'https://mainnet.infura.io/v3/e9dd85eba51a4853920381c5250d0eb0';
    const contractAddress = '0xf230b790E05390FC8295F4d3F60332c93BEd42e2';
    const account = '0xf230b790E05390FC8295F4d3F60332c93BEd42e2';
    const abi = [{
      constant: true,
      inputs: [{
        name: "_owner",
        type: "address",
      }],
      name: "balanceOf",
      outputs: [{
        name: "balance",
        type: "uint256"
      }],
      payable: false,
      stateMutability: "view",
      type: "function",
    }];

    const web3 = new Web3(url);
    const contract = new web3.eth.Contract(abi, contractAddress);
    const result = await contract.methods.balanceOf(account).call();

    await res.send({
      balanceOf: result.toString(),
    });
  });

module.exports = server;