import { makeAutoObservable } from "mobx";

export default class BannersStore {
  constructor() {
    this._banners = [
      // {
      //   text: "We are looking for Sound engineer for the 8th season of Game of Thrones",
      // },
      // {
      //   text: "We are looking for Director for the 8th season of Game of Thrones",
      // },
      // {
      //   text: "We are looking for Producer for the last season of Breaking Bad",
      // },
      // {
      //   text: "We are looking for Costumer for the 10 season of American horror story",
      // },
    ];
    makeAutoObservable(this);
  }
  setBanners(banners) {
    this._banners = banners;
  }

  get banners() {
    return this._banners;
  }
}
