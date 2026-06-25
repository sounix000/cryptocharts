
function initChart(){
 FusionCharts.ready(function(){
   const chart = new FusionCharts({
     type:'realtimeline',
     renderAt:'chart-container',
     width:'100%',
     height:'400',
     dataFormat:'json',
     id:'stockRealTimeChart',
     dataSource:{
       chart:{
         caption:'Bitcoin Price (USD)',
         refreshinterval:'1',
         numdisplaysets:'25'
       },
       categories:[{category:[]}],
       dataset:[{data:[]}]
     },
     events:{
       initialized:function(evt){
         evt.sender.chartInterval=setInterval(function(){
           const value = latestPrices?.bitcoin?.usd;
           if(!value) return;
           const label = new Date().toLocaleTimeString();
           evt.sender.feedData(`&label=${label}&value=${value}`);
         },3000);
       },
       disposed:function(evt){
         clearInterval(evt.sender.chartInterval);
       }
     }
   });
   chart.render();
 });
}
