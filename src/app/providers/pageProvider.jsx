"use client";
import React, { createContext, useState } from "react";


const PageProviders = ({ children }) => {
  const [page, setPage] = useState(1);
  const [contentPart, setContentPart] = useState({
    experience: 1,
    education: 1,
    achievement: 1,
    certificate: 1,
    portofolio: 1,
  });

  return (
    <PageContext.Provider value={{ page, setPage, contentPart, setContentPart }}>
      {children}
    </PageContext.Provider>
  );
};

export const PageContext = createContext();
export default PageProviders;
