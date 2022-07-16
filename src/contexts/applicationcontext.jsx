/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';

export const ApplicationContext = createContext();

export function ApplicationContextProvider({ children }) {
  const [applicationdetails, setapplicationdetails] = useState({});
  return (
    <ApplicationContext.Provider value={[applicationdetails, setapplicationdetails]}>
      {children}
    </ApplicationContext.Provider>
  );
}
