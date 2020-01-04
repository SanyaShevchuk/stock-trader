import axios from "axios";
import { endpoints } from "@/configs/endpoints";
import { IAsset } from "@/interfaces/stocks";

export const getCryptoCurrencyInfo = (
  start = 1,
  limit = 10,
  convert = "USD"
): Promise<{ data: IAsset[] }> =>
  axios
    .get(endpoints.cryptocurrency(), {
      headers: {
        "X-CMC_PRO_API_KEY": "63fb5379-398f-4b7c-89bf-e68f52a946cc"
      },
      params: {
        start,
        limit,
        convert
      }
    })
    .then(({ data }) => data);

// axios
// .get(
//   "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=10&convert=USD",
//   {
//     headers: {
//       "X-CMC_PRO_API_KEY": "63fb5379-398f-4b7c-89bf-e68f52a946cc"
//     }
//   }
// )
// .then((data: any) => {
//   const jsData = JSON.stringify(data);
//   // download(jsData, 'json.txt', 'text/plain');
// });
