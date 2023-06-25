import React, { createContext } from 'react';
import { AiFillCaretLeft } from 'react-icons/ai';

const ShowDetailContext = createContext();

const ShowDetail = ({ action, children }) => {
  return (
    <ShowDetailContext.Provider value={action}>
      <section className='py-10 bg-gray-50 sm:py-16 lg:py-12'>
        <div className='max-w-6xl px-4 mx-auto sm:px-6 lg:px-8'>
          <button onClick={action} className='flex items-center mb-8'>
            <AiFillCaretLeft /> Kembali
          </button>
          <div>{children}</div>
        </div>
      </section>
    </ShowDetailContext.Provider>
  );
};

const Head = ({ children }) => {
  return <div className='px-4 sm:px-0'>{children}</div>;
};

const Body = ({ children }) => {
  return (
    <div className='mt-6 border-t border-gray-100'>
      <dl className='divide-y divide-gray-100'>{children}</dl>
    </div>
  );
};

const BodyItem = ({ children }) => {
  return (
    <div className='px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
      {children}
    </div>
  );
};

const H3 = ({ children }) => {
  return (
    <h3 className='text-base font-semibold leading-7 text-gray-900'>
      {children}
    </h3>
  );
};

const Paragraf = ({ children }) => {
  return (
    <p className='mt-1 max-w-2xl text-sm leading-6 text-gray-500'>{children}</p>
  );
};

const DefinitionTitle = ({ children }) => {
  return (
    <dt className='text-sm font-medium leading-6 text-gray-900 capitalize'>
      {children}
    </dt>
  );
};

const DefinitionDescription = ({ children }) => {
  return (
    <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 capitalize'>
      {children}
    </dd>
  );
};

ShowDetail.Head = Head;
ShowDetail.Body = Body;
ShowDetail.Bi = BodyItem;
ShowDetail.H3 = H3;
ShowDetail.P = Paragraf;
ShowDetail.Dt = DefinitionTitle;
ShowDetail.Dd = DefinitionDescription;

export default ShowDetail;
