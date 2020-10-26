class Repositories {
  constructor(_request) {
    this.request = _request;
  }

  getRepositoryByOwnerAndName(owner, name) {
    return this.request.get(`/repos/${owner}/${name}`);
  }

  getRepositoryLanguagesByOwnerAndName(owner, name) {
    return this.request.get(`/repos/${owner}/${name}/languages`);
  }
}

export default Repositories;
