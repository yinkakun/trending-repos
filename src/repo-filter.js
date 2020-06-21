import React from 'react';

const LanguageFilterDropdown = ({
  CodeLanguageQuery,
  handleCodeLanguageQuery,
}) => {
  return (
    <label htmlFor="languagefilterdropdown">
      <select
        value={CodeLanguageQuery}
        onChange={handleCodeLanguageQuery}
        id="languagefilterdropdown"
      >
        <option value="">All</option>
        <option value="unknown">Unknown</option>
        <option value="javascript">Javascript</option>
        <option value="python">Python</option>
        <option value="css">CSS</option>
        <option value="html">HTML</option>
        <option value="java">Java</option>
        <option value="kotlin">Kotlin</option>
        <option value="php">PHP</option>
        <option value="c">C</option>
        <option value="ruby">Ruby</option>
        <option value="rust">Rust</option>
        <option value="shell">Shell</option>
        <option value="swift">Swift</option>
        <option value="typescript">Typescript</option>
        <option value="cpp">C++</option>
      </select>
    </label>
  );
};

const TimeFilterDropdown = ({ timePeriodQuery, handleTimePeriodQuery }) => {
  return (
    <label htmlFor="timefilterdropdown">
      <select
        value={timePeriodQuery}
        onChange={handleTimePeriodQuery}
        id="timefilterdropdown"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
    </label>
  );
};

export { LanguageFilterDropdown, TimeFilterDropdown };
