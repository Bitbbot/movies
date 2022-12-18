import { makeAutoObservable } from "mobx";

export default class TopicsStore {
  constructor() {
    this._topics = [
      // {
      //   img: "https://wme-gep-drupal-hbo-prod.s3.amazonaws.com/game-of-thrones-1-1920x1080.jpg",
      //   text: "We are looking for Sound engineer for the 8th season of Game of Thrones",
      // },
      // {
      //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI0ECiNPPyTjKhDFOyaK-Ts8zSh2-YLz9O41OGQPSnyo8a3_2BLHzdvKDxJCG3g_dXhKM&usqp=CAU",
      //   text: "We are looking for Director for the 8th season of Game of Thrones",
      // },
      // {
      //   img: "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
      //   text: "We are looking for Producer for the last season of Breaking Bad",
      // },
      // {
      //   img: "https://flxt.tmsimg.com/assets/p8807210_b_v8_ao.jpg",
      //   text: "We are looking for Costumer for the 10 season of American horror story",
      // },
    ];
    makeAutoObservable(this);
  }
  setTopics(topics) {
    this._topics = topics;
  }

  get topics() {
    return this._topics;
  }
}
