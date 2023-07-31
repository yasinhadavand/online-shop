const btc = document.getElementById("bitcoin"),
    ltc = document.getElementById("litecoin"),
    eth = document.getElementById("ethereum"),
    doge = document.getElementById("dogecoin");

const liveprice = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Cethereum%2Cdogecoin&vs_currencies=usd",
     
    "method": "GET",
    "headers": {}
}

$.ajax(liveprice).done(function (response) {
    btc.innerHTML = response.bitcoin.usd;
    ltc.innerHTML = response.litecoin.usd;
    eth.innerHTML = response.ethereum.usd;
    doge.innerHTML = response.dogecoin.usd;
    console.log(response)
}) 
