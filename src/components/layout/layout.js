import * as React from 'react';
import Navbar from '../navbar';

import '../../styles/global.css';

function Layout({ children, currentPage }) {
  return (
    <div>
      <Navbar currentPage={currentPage} />
      {children}
    </div>
  );
}

export {
  Layout
}
