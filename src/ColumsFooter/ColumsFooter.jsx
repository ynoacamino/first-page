import './ColumsFooter.css';
import React from 'react';

// eslint-disable-next-line no-unused-vars
function ColumsFooter({
  title, content, changeWindow, windowFooter, llave,
}) {
  const ifWindow = (x) => {
    if (windowFooter === x) {
      changeWindow(0);
    } else {
      changeWindow(x);
    }
  };

  return (
    <div
      role="button"
      className={`colFooter ${windowFooter === llave && 'viewFooter'}`}
      onClick={() => { ifWindow(llave); }}
      onKeyPress={() => { ifWindow(llave); }}
      aria-hidden
    >
      <span className="titleFooter">{title}</span>
      <ul className="ulFooter">
        {content.map((x) => <li key={x.name} className="liFooter"><a href={x.url} className="linkFooter">{x.name}</a></li>)}
      </ul>
    </div>
  );
}

export default ColumsFooter;
