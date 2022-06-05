import './ColumsFooter.css';
import React from 'react';

// eslint-disable-next-line no-unused-vars
function ColumsFooter({ title, content }) {
  return (
    <div className="colFooter">
      <span className="titleFooter">{title}</span>
      <ul className="ulFooter">
        {content.map((x) => <li key={x.name} className="liFooter"><a href={x.url} className="linkFooter">{x.name}</a></li>)}
      </ul>
    </div>
  );
}

export default ColumsFooter;
