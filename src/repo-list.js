import React from 'react';

import { ReactComponent as Star } from './icons/star.svg';
import { ReactComponent as Fork } from './icons/fork.svg';

const RepoCard = ({
  author,
  avatar,
  description,
  forks,
  language,
  name,
  stars,
  languageColor,
  url,
}) => {
  return (
    <li className="repo-card">
      <div className="repo-card__header">
        <a
          href={url}
          target="_blank"
          rel="noreferrer noopener"
          className="repo-card__title"
        >
          {name}
        </a>
        <div className="repo-card__language">
          <span
            className="repo-card__language-color"
            style={{ backgroundColor: languageColor }}
          />
          <span className="repo-card__subtitle">{language}</span>
        </div>
      </div>

      <div className="repo-card__body">{description}</div>

      <div className="repo-card__footer">
        <div className="repo-card__author">
          <div className="repo-card__author-avatar">
            <img src={avatar} loading="lazy" alt={`${name} avatar`} />
          </div>
          <span className="repo-card__author-name">{author}</span>
        </div>
        <div className="repo-card__meta">
          <span className="repo-card__icons">
            <Star />
            {stars}
          </span>
          <span className="repo-card__icons">
            <Fork />
            {forks}
          </span>
        </div>
      </div>
    </li>
  );
};

const RepoList = ({ data, retry }) => {
  const repos = data.repos.map((repo) => (
    <RepoCard
      key={repo.name}
      name={repo.name}
      author={repo.author}
      avatar={repo.avatar}
      url={repo.url}
      description={repo.description}
      language={repo.language}
      stars={repo.stars}
      forks={repo.forks}
      languageColor={repo.languageColor}
    />
  ));

  if (data.isError) {
    return (
      <main className="main">
        <div className="retry">
          <p>
            Looks like you lost your connection. Please check it and try again.
          </p>
          <button className="retry__button" type="button" onClick={retry}>
            Try Again
          </button>
        </div>
      </main>
    );
  }

  if (data.isFetching) {
    return (
      <main className="main">
        <div>
          <p className="visually-hidden"> Loading</p>
          <div className="spinner" />
        </div>
      </main>
    );
  }

  return (
    <main className="main">
      <ul className="repo-list">{repos}</ul>
    </main>
  );
};

export default RepoList;
