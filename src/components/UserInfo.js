export default class UserInfo {
  constructor(configUserInfo) {
    this._pofileName = document.querySelector(configUserInfo.userNameSelector);
    this._pfofileJob = document.querySelector(configUserInfo.userJobSelector);
  }

  getUserInfo() {
    return {
      username: this._pofileName.textContent,
      userjob: this._pfofileJob.textContent,
    }
  }

  setUserInfo (userData) {
    this._pofileName.textContent = userData.username;
    this._pfofileJob.textContent = userData.userjob;
  }
}