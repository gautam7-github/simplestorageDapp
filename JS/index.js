async function connectMetaMask(mtamaskbtn) {
	if (window.ethereum.isConnected()) {
		const account = await window.ethereum.request({
			method: "eth_requestAccounts",
		});
		sessionStorage.setItem("account", account);
		window.open(
			"https://gautam7-github.github.io/simplestorageDapp/contract.htmlhtml",
			"_self"
		);
	}
	if (window.ethereum) {
		window.WEB3 = new Web3(window.ethereum);
		const accounts = await window.WEB3.eth.getAccounts();
		const account = accounts[0];
		const chainID = await window.WEB3.eth.getChainId();
		if (chainID != 3) {
			await ethereum.request({
				method: "wallet_switchEthereumChain",
				params: [{ chainId: "0x3" }],
			});
		}
		sessionStorage.setItem("account", account);
		mtamaskbtn.remove();
		window.open(
			"https://gautam7-github.github.io/simplestorageDapp/contract.html",
			"_self"
		);
	}
}
window.onload = async function () {
	const mtamaskbtn = document.getElementById("metamaskBtn");
	mtamaskbtn.addEventListener("click", () => {
		connectMetaMask(mtamaskbtn);
	});
};
