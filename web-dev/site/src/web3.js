const Web3Module = require('web3'); // import module
const contractJson = require('./Moon.json');

let web3;
let account;
let contract;
const price = 394924431210087;

// --- initialize web3
export async function initializeWeb3(){
	web3 = new Web3Module(window.ethereum); // create instance
	await ethereum.enable(); //enable ethereum
	 
	//get contract
	const id = await web3.eth.net.getId();
	const deployedNetwork = contractJson.networks[id];
	contract = new web3.eth.Contract(
		contractJson.abi,
		deployedNetwork.address
	);
}

// exporting functions
export async function GetMoonOwner(){
	const result = await contract.methods.GetOwnerName().call();
	return result;
}
export async function SetMoonOwner(newName){
	//
}


