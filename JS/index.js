async function connectMetaMask(mtamaskbtn) {
	if (window.ethereum.isConnected()) {
		const account = await window.ethereum.request({
			method: "eth_requestAccounts",
		});
		sessionStorage.setItem("account", account);
		window.open("../contract.html", "_self");
	}
	if (window.ethereum) {
		window.WEB3 = new Web3(window.ethereum);
	}
	const accounts = await window.WEB3.eth.getAccounts();
	const account = accounts[0];
	const chainID = await window.WEB3.eth.getChainId();
	sessionStorage.setItem("account", account);
	console.log(account);
	mtamaskbtn.remove();
	window.open("../contract.html", "_self");
}
window.onload = async function () {
	const mtamaskbtn = document.getElementById("metamaskBtn");
	mtamaskbtn.addEventListener("click", () => {
		connectMetaMask(mtamaskbtn);
	});
};
