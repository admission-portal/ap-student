/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState } from 'react';

export const ApplicationContext = createContext();

export function ApplicationContextProvider({ children }) {
  const [applicationDetails, setApplicationDetails] = useState({});
  return (
    <ApplicationContext.Provider value={[applicationDetails, setApplicationDetails]}>
      {children}
    </ApplicationContext.Provider>
  );
}
