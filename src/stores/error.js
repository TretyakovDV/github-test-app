import {
  makeObservable, observable, action,
} from 'mobx';

class Error {
  constructor() {
    makeObservable(this, {
      error: observable,
      setError: action,
    });
  }

  error = null

  setError(value) {
    this.error = value;
  }

  deleteError() {
    this.error = null;
  }
}

export default new Error();
