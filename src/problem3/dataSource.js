const url = "https://static.ngnrs.io/test/prices";

const Datasource = {
    getPrices: function () {
        let temp = fetch(url)
            .then((response) => response.json())
            .then((data) => data.data.prices)
            .then((prices) => {
                prices.forEach((price) => {
                    price.mid = function () {
                        return (price.buy + price.sell) / 2/ 100;
                    };
                    price.quote = function () {
                        return price.pair.slice(-3);
                    };
                });
                return prices;
            });

        return temp;
    },
};

export { Datasource };
