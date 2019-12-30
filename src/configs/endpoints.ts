export const endpoints = {
  coinmarketcap: "https://pro-api.coinmarketcap.com",
  stockTrader: "localhost://3000",

  cryptocurrency: () =>
    `${endpoints.coinmarketcap}/v1/cryptocurrency/listings/latest`
};
