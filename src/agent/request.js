/**
 * If used JWT need import token from
 * store and use helperTokenPlugin
 */

const mockStore = {
  token: 'token',
};

class Request {
  constructor(_superagent, _api) {
    this.superagent = _superagent;
    this.api = _api;
  }

  helperResponseBody(res) {
    return res.body;
  }

  helperTokenPlugin(req) {
    if (mockStore.token) {
      req.set('authorization', `Bearer ${mockStore.token}`);
    }
  }

  get(url) {
    return this.superagent
      .get(`${this.api}${url}`)
      .end(() => {}) // pass error callback
      .then(this.helperResponseBody);
  }

  post(url, body) {
    return this.superagent
      .post(`${this.api}${url}`, body)
      .use(this.helperTokenPlugin)
      .end(() => {}) // pass error callback
      .then(this.helperResponseBody);
  }

  put(url, body) {
    return this.superagent
      .put(`${this.api}${url}`, body)
      .end(() => {}) // pass error callback
      .then(this.helperResponseBody);
  }

  delete(url) {
    return this.superagent
      .del(`${this.api}${url}`)
      .end(() => {}) // pass error callback
      .then(this.helperResponseBody);
  }
}

export default Request;
