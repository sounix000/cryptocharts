
async function refresh(){
 const data = await fetchPrices();

 document.getElementById('btcusd').innerText = data.bitcoin.usd;
 document.getElementById('btceur').innerText = data.bitcoin.eur;
 document.getElementById('ethusd').innerText = data.ethereum.usd;
 document.getElementById('etheur').innerText = data.ethereum.eur;
}

refresh();
setInterval(refresh,10000);
initChart();
