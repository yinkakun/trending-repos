import React, { useState } from 'react';
import RepoList from './repo-list';
import { LanguageFilterDropdown, TimeFilterDropdown } from './repo-filter';
import Header from './header';
import Footer from './footer';
import useFetchRepos from './use-fetch-repos';

const App = () => {
  const [codeLanguageQuery, setCodeLanguageQuery] = useState('');
  const [timePeriodQuery, setTimePeriodQuery] = useState('daily');
  const [data, retry] = useFetchRepos(codeLanguageQuery, timePeriodQuery);

  const handleTimePeriodQuery = (e) => {
    setTimePeriodQuery(e.target.value);
  };

  const handleCodeLanguageQuery = (e) => {
    setCodeLanguageQuery(e.target.value);
  };

  return (
    <div className="app">
      <Header>
        <LanguageFilterDropdown
          handleCodeLanguageQuery={handleCodeLanguageQuery}
          CodeLanguageQuery={codeLanguageQuery}
        />

        <TimeFilterDropdown
          handleTimePeriodQuery={handleTimePeriodQuery}
          timePeriodQuery={timePeriodQuery}
        />
      </Header>

      <RepoList data={data} retry={retry} />

      <Footer />
    </div>
  );
};

export default App;
