import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';

import Request from './request';
import Repositories from './Repositories';

const superagent = superagentPromise(_superagent, global.Promise);
const API_ROOT = 'http://localhost:8080';//'https://api.github.com';

const request = new Request(superagent, API_ROOT);

const repositories = new Repositories(request);

export default { repositories };
