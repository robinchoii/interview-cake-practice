var stockPricesYesterday = [15, 1, 10, 7, 5, 8, 11, 15]

function getMaxProfit(stock_prices) {

    var reverse_stock_prices = stock_prices.reverse();

    var max_profit = 0;

    for (var buy_index = 0; buy_index < stock_prices.length; buy_index++) {

        for (var sell_index = 0; sell_index < stock_prices.length; sell_index++) {

            var buy_price = reverse_stock_prices[buy_index]

            var sell_price = reverse_stock_prices[sell_index]

            var profit = sell_price - buy_price

            if (profit > max_profit) {

                max_profit = profit;

            }

        }

    }

    return max_profit
    console.log(max_profit)

}



getMaxProfit(stockPricesYesterday)
