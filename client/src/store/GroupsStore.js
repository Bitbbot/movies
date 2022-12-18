import { makeAutoObservable } from "mobx";

export default class GroupsStore {
  constructor() {
    this._groups = [
      // {
      //   name: "Alex",
      //   img: "https://wme-gep-drupal-hbo-prod.s3.amazonaws.com/game-of-thrones-1-1920x1080.jpg",
      //   type: "Sound engineer",
      //   text: "We are looking for Sound engineer for the 8th season of Game of Thrones",
      // },
      // {
      //   name: "Alex",
      //   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI0ECiNPPyTjKhDFOyaK-Ts8zSh2-YLz9O41OGQPSnyo8a3_2BLHzdvKDxJCG3g_dXhKM&usqp=CAU",
      //   type: "Director",
      //   text: "We are looking for Director for the 8th season of Game of Thrones",
      // },
      // {
      //   name: "Alex",
      //   img: "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
      //   type: "Producer",
      //   text: "We are looking for Producer for the last season of Breaking Bad",
      // },
      // {
      //   name: "Alex",
      //   img: "https://flxt.tmsimg.com/assets/p8807210_b_v8_ao.jpg",
      //   type: "Costumer",
      //   text: "We are looking for Costumer for the 10 season of American horror story",
      // },
    ];
    makeAutoObservable(this);
  }
  setGroups(groups) {
    this._groups = groups;
  }

  get groups() {
    return this._groups;
  }
}
