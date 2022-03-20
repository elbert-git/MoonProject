// --- On start imports
require('aframe');
require('aframe-orbit-controls');
import {initializeWeb3, GetMoonOwner} from './web3';

// --- elements
let elNameTag; 
// --- variables
let account;

// --- On Page load function
window.onload = async () => {
	// --- get elements
	elNameTag = document.getElementById("nameTag");
	
	// --- variables
	
	await initializeWeb3();
	 
	// update ui based on contract
	elNameTag.innerHTML = await GetMoonOwner();
}


