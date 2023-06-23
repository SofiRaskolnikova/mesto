export default class Api {
  constructor(options) {
    this._url = options.baseUrl;
    this._headers = options.headers;
    this._authorization = this._headers.authorization
  }

  getInfo() {
    return fetch(`${this._url}/users/me`, {
      _headers: {
        authorization: this._authorization
      }
    })
    .then(res => res.ok ? res.json() : Promise.reject)
  }
}