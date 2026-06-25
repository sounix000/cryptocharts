
function convertCurrency(){
 const amount = Number(document.getElementById('amount').value);
 const asset = document.getElementById('asset').value;
 const currency = document.getElementById('currency').value;

 if(!latestPrices[asset]) return;

 const result = amount * latestPrices[asset][currency];
 document.getElementById('result').innerText =
   `${amount} ${asset} = ${result.toFixed(2)} ${currency.toUpperCase()}`;
}
