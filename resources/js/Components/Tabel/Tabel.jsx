import { Link } from '@inertiajs/react';
import React, { createContext } from 'react';

const TabelContext = createContext();

const Table = ({ dataForTable, results, children }) => {
  return (
    <TabelContext.Provider value={{ dataForTable, results }}>
      <table className='table w-full'>{children}</table>
    </TabelContext.Provider>
  );
};

const Thead = ({ children }) => {
  return <thead>{children}</thead>;
};

const Tbody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

const Tr = ({ children }) => {
  return <tr className='hover'>{children}</tr>;
};

const Th = ({ children }) => {
  return <th>{children}</th>;
};

const Td = ({ children }) => {
  return <td>{children}</td>;
};

const TabelLink = ({ className = '', children, ...props }) => {
  return (
    <Link
      {...props}
      className={`badge text-white badge-warning gap-2 ${className}`}
    >
      {children}
    </Link>
  );
};

Table.Thead = Thead;
Table.Tbody = Tbody;
Table.Tr = Tr;
Table.Th = Th;
Table.Td = Td;
Table.Link = TabelLink;

export default Table;
