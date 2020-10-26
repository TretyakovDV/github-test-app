import {
  makeObservable, observable, action,
} from 'mobx';

class Details {
  constructor() {
    makeObservable(this, {
      isOpen: observable,
      id: observable,
      open: action,
      close: action,
    });
  }

  isOpen = false

  id = null;

  open(id) {
    this.isOpen = true;
    this.id = id;
  }

  close() {
    this.isOpen = false;
    this.id = null;
  }
}

export default new Details();
