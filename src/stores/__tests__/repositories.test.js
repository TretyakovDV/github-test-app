import agent from '../../agent';
import repositories from '../repositories';

jest.mock('../../agent', () => ({
  repositories: {
    getRepositoryByOwnerAndName: jest.fn(() => ({
      id: 1,
      stargazers_count: 1,
      html_url: 'html_url',
      watchers: 1,
      forks: 1,
    })),
    getRepositoryLanguagesByOwnerAndName: jest.fn(() => ({
      language: 500,
      language2: 200,
    })),
  },
}));

describe('RepositoriesStore', () => {
  it('added repository', async () => {
    const owner = 'facebook';
    const repo = 'react';

    await repositories.addRepository(`${owner}/${repo}`);

    expect(agent.repositories.getRepositoryByOwnerAndName)
      .toHaveBeenCalledTimes(1);
    expect(agent.repositories.getRepositoryByOwnerAndName)
      .toHaveBeenCalledWith(owner, repo);

    expect(agent.repositories.getRepositoryLanguagesByOwnerAndName)
      .toHaveBeenCalledTimes(1);
    expect(agent.repositories.getRepositoryLanguagesByOwnerAndName)
      .toHaveBeenCalledWith(owner, repo);

    expect(repositories.list.length).toEqual(1);
  });

  it('cleared repositories', async () => {
    const owner = 'facebook';
    const repo = 'react';

    await repositories.addRepository(`${owner}/${repo}`);

    expect(repositories.list.length).toEqual(1);
    repositories.clear();
    expect(repositories.list.length).toEqual(0);
  });

  it('get repository by id', async () => {
    const owner = 'facebook';
    const repo = 'react';

    const expected = {
      id: 1,
      forks: 1,
      stars: 1,
      title: 'facebook/react',
      url: 'html_url',
      watchers: 1,
      languages: {
        language: 500,
        language2: 200,
      },
    };

    await repositories.addRepository(`${owner}/${repo}`);

    expect(repositories.getRepository(1)).toEqual(expected);
  });

  it('get repository languages by id', async () => {
    const owner = 'facebook';
    const repo = 'react';

    const expected = [
      {
        label: 'language',
        percent: 71.42857142857143,
      },
      {
        label: 'language2',
        percent: 28.57142857142857,
      },
    ];

    await repositories.addRepository(`${owner}/${repo}`);

    expect(repositories.languages(1)).toEqual(expected);
  });

  it('remove repository by id', async () => {
    const owner = 'facebook';
    const repo = 'react';

    const getRepo = (id) => ({
      id,
      stargazers_count: 1,
      html_url: 'html_url',
      watchers: 1,
      forks: 1,
    });

    await repositories.addRepository(`${owner}/${repo}`);
    agent.repositories.getRepositoryByOwnerAndName.mockReturnValueOnce(getRepo(2));
    await repositories.addRepository(`${owner}/${repo}`);

    expect(repositories.list.length).toEqual(2);
    repositories.removeRepository(2);
    expect(repositories.list.length).toEqual(1);
  });
});
