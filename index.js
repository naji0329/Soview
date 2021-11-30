let currentOffset = 0;
$(document).ready(function(){
    $('#btn-loadmore').click(() => {
      currentOffset += 20;
      loadTradingData();
    })
    loadTradingData(); 
});

const loadTradingData = () => {
  console.log("okay");
  $.ajax({
    url: `https://api.solscan.io/amm/txs?address=8TpLegYhGc5z3PAJonMH6feHChy719xtiS17pLyzUnp4&type=all&offset=${currentOffset}&limit=10`,
    type: 'GET',

    success: function (res){
      console.log(res.data.items);
      var data = res.data.items;
      
      for (let i = 0; i < data.length; i++) {
        // const row = '<tr><td>'+data[i]['updatedAt']+'</td><td>'+data[i]['updatedAt']+'</td><td>'+data[i]['updatedAt']+'</td><td>'+data[i]['updatedAt']+'</td></tr>';
        const row = `<tr><td>${data[i]['updatedAt']}</td>`+
          `<td>${data[i]['volume']} ${data[i]['base']['symbol']}</td>`+
          `<td>${data[i]['volumeUSD'] / data[i]['volume']} USD</td>`+
          `<td>${data[i]['volumeUSD']} ${data[i]['quote']['symbol']}</td>`+
          `<td>Raydium</td></tr>`;
        $('#tbody').append(row);
      }
    }
  })
}