import React from 'react';
import { observer, inject } from 'mobx-react';
import './App.css';
import AddRepositoryForm from './components/AddRepositoryForm';
import RepositoryListItem from './components/RepositoryListItem';

const App = inject('repositories')(observer(({ repositories }) => {
  const { list } = repositories;

  console.log('list => ', list);

  const handleSubmit = (name) => repositories.addRepository(name);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Mobx Test v3
        </h1>
        <AddRepositoryForm onSubmit={handleSubmit} />
        <ul>
          {
            list.length ? list.map((el) => (
              <RepositoryListItem
                key={el.id}
                title={el.title}
                stars={el.stars}
                url={el.url}
              />
            )) : (<p>List is empty!</p>)
          }
        </ul>
      </header>
    </div>
  );
}));

export default App;
