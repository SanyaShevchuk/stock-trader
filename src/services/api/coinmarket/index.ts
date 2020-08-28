import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import { coinmarket } from "../config";

export default class CoinMarketAPI {
  private instance: AxiosInstance;

  constructor() {
    this.instance = axios.create();
  }
  get(url: string, config: AxiosRequestConfig) {
    this.instance.get(url, { ...coinmarket, ...config });
  }
  post(url: string, data: any, config: AxiosRequestConfig) {
    this.instance.post(url, data, { ...coinmarket, ...config });
  }
  delete(url: string, config: AxiosRequestConfig) {
    this.instance.delete(url, { ...coinmarket, ...config });
  }
  put(url: string, data: any, config: AxiosRequestConfig) {
    this.instance.put(url, data, { ...coinmarket, ...config });
  }
}
