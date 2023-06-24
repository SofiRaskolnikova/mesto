export default class UserInfo {
  constructor(configUserInfo) {
    this._pofileName = document.querySelector(configUserInfo.userNameSelector);
    this._pfofileJob = document.querySelector(configUserInfo.userJobSelector);
    this._profileAvatar = document.querySelector(configUserInfo.userAvatarSelector);
  }

  getUserInfo() {
    return {
      username: this._pofileName.textContent,
      userjob: this._pfofileJob.textContent,
    }
  }

  setUserInfo({username, userjob, useravatar}) {
    this._pofileName.textContent = username;
    this._pfofileJob.textContent = userjob;
    this._profileAvatar.src = useravatar
  }
}