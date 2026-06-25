
let latestPrices = {};

async function fetchPrices() {
  const url='https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd,eur';
  const r = await fetch(url);
  const data = await r.json();
  latestPrices = data;
  return data;
}
