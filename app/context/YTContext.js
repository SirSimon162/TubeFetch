'use client'
import { createContext, useState } from "react";
const YTContext = createContext();

export const YTProvider = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedVideoId, setSelectedVideoId] = useState('');
  
    return (
      <YTContext.Provider value={{ searchQuery, setSearchQuery,selectedVideoId, setSelectedVideoId }}>
        {children}
      </YTContext.Provider>
    );
  };
  
  export default YTContext;