abi = [
	{
		inputs: [],
		name: "get",
		outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [{ internalType: "uint256", name: "data", type: "uint256" }],
		name: "set",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];
address = "0x8ca4e451903e4dbb3df6eeee34a02b0aca81eddc";

window.onload = function () {
	if (typeof ethereum == null) {
		alert("Install Metamask extension");
	}
	try {
		window.WEB3 = new Web3(window.ethereum);
	} catch (error) {
		console.log(error);
	}
	var myC = new window.WEB3.eth.Contract(abi, address);
	const getBtn = document.getElementById("getBtn");
	getBtn.addEventListener("click", () => {
		contractGetter(myC);
	});
	const btn = document.getElementById("setBtn");
	btn.addEventListener("click", () => {
		contractSetter(myC);
	});
};

async function contractGetter(myC) {
	var data = await myC.methods.get().call();
	console.log(data);
	document.getElementById("getText").textContent = data;
}
async function contractSetter(myC) {
	const currVal = document.getElementById("setText").value;
	const account = sessionStorage.getItem("account");
	await myC.methods
		.set(currVal)
		.send({ from: account })
		.on("transactionHash", function (hash) {
			console.log("https://ropsten.etherscan.io/tx/" + hash);
			var linker = document.getElementById("footer");
			linker.href = "https://ropsten.etherscan.io/tx/" + hash;
			linker.textContent = "TXN Hash";
		});
}
