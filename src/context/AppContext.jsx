import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [contextCount, setContextCount] = useState(0);

  function handleContextCount(value) {
    setContextCount(value);
  }

  return (
    <AppContext.Provider value={{ contextCount, handleContextCount }}>
      {children}
    </AppContext.Provider>
  );
}
