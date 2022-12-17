import { makeAutoObservable } from "mobx";

export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._isAdmin = false;
    this._login = "Pavel";
    this._img =
      "https://www.bentbusinessmarketing.com/wp-content/uploads/2013/02/35844588650_3ebd4096b1_b-1024x683.jpg";
    makeAutoObservable(this);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }

  get isAuth() {
    return this._isAuth;
  }
  setIsAdmin(bool) {
    this._isAdmin = bool;
  }

  get isAdmin() {
    return this._isAdmin;
  }
  setLogin(login) {
    this._login = login;
  }
  get login() {
    return this._login;
  }
  setImg(img) {
    this._img = img;
  }
  get img() {
    return this._img;
  }
}
