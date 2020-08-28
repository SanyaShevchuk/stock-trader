import axios, { AxiosInstance } from "axios";

export class API {
  private instance: AxiosInstance;
  constructor() {
    this.instance = axios.create();
  }
}
