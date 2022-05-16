async function connectMetaMask(mtamaskbtn) {
	try {
		await window.ethereum.request({ method: "eth_requestAccounts" });
		window.WEB3 = new Web3(window.ethereum);
	} catch (error) {
		console.log("No Metamask");
	}

	let account;
	await window.WEB3.eth.getAccounts().then(function (result) {
		account = result[0];
	});
	sessionStorage.setItem("account", account);
	let chainVal;
	await window.WEB3.eth.getChainId().then((val) => {
		chainVal = val;
	});
	if (chainVal != 3) {
		await ethereum.request({
			method: "wallet_switchEthereumChain",
			params: [{ chainId: "0x3" }],
		});
	}
	mtamaskbtn.remove();
	window.open(
		// "../contract.html",
		"https://gautam7-github.github.io/simplestorageDapp/contract.html",
		"_self"
	);
}
window.onload = async function () {
	const mtamaskbtn = document.getElementById("metamaskBtn");
	mtamaskbtn.addEventListener("click", () => {
		connectMetaMask(mtamaskbtn);
	});
};
