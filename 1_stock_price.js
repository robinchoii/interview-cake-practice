var stockPricesYesterday = [104, 27, 15, 12, 11, 9]

function getMaxProfit(stock_prices) {

    var max_profit = 0;

    var min_price = stock_prices[0];

    for (var i = 0; i < stock_prices.length; i++) {

        var sell_price = stock_prices[i+1];

        var profit = sell_price - min_price;

        if (profit > max_profit) {

            max_profit = profit

        }

        if (sell_price < min_price) {

            min_price = sell_price;


        }


    }

    if( max_profit  <= 0 )  {

        console.log('error, you are selling at a loss');

        return false

    } else {

        console.log(max_profit)

    }
   //  for (var buy_index = 0; buy_index < stock_prices.length; buy_index++) {

   //      var buy_price = stock_prices[buy_index]

   //      for (var sell_index = buy_index + 1; sell_index < stock_prices.length; sell_index++) {

   //          var sell_price = stock_prices[sell_index]

   //          var profit = sell_price - buy_price

   //          if (profit > max_profit) {

   //              max_profit = profit;

   //          }

   //      }

   //  }

   // if (profit <= 0 ) {

   //      console.log('dont sell!')

   //  } else {

   //      console.log(max_profit)

   //      return max_profit

   //  }

}



getMaxProfit(stockPricesYesterday)
