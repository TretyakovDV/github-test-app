import {
  makeObservable, observable, action, computed,
} from 'mobx';
import agent from '../agent';
import error from './error';

class Repositories {
  constructor() {
    makeObservable(this, {
      repositoriesList: observable,
      list: computed,
      addRepository: action,
      getRepository: action,
      clear: action,
    });
  }

  repositoriesList = observable.map();

  get list() {
    return [...this.repositoriesList.values()];
  }

  languages(id) {
    const repository = this.getRepository(id);
    if (!repository) return undefined;

    const sum = Object.values(repository.languages).reduce((a, b) => a + b);
    return Object.keys(repository.languages).map((key) => (
      {
        label: key,
        percent: (repository.languages[key] / sum) * 100,
      }
    ));
  }

  clear() {
    this.repositoriesList.clear();
  }

  getRepository(id) {
    return this.repositoriesList.get(id);
  }

  removeRepository(id) {
    this.repositoriesList.delete(id);
  }

  async addRepository(value) {
    const [owner, name] = value.split('/');
    try {
      const repository = await agent.repositories.getRepositoryByOwnerAndName(owner, name);
      const languages = await agent.repositories.getRepositoryLanguagesByOwnerAndName(owner, name);

      this.repositoriesList.set(repository.id, {
        title: value,
        id: repository.id,
        stars: repository.stargazers_count,
        url: repository.html_url,
        watchers: repository.watchers,
        forks: repository.forks,
        languages,
      });
    } catch (e) {
      error.setError(e);
    }
  }
}

export default new Repositories();
