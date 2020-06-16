import React from "react";
import PropTypes from "prop-types";

function Statistics({ title, stats }) {
  const list = stats.map((item) => {
    return (
      <li className="item" key={item.id}>
        <span className="label">{item.label}</span>
        <span className="percentage">{item.percentage}</span>
      </li>
    );
  });

  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}

      <ul className="stat-list">{list}</ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};

export { Statistics };
