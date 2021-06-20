import { createContext, useContext, useState } from "react";

const TabsContext = createContext();

const TabsProvider = ({ children }) => {
  const [tabs, setTabs] = useState([]);

  return (
    <TabsContext.Provider value={{ tabs, setTabs }}>
      {children}
    </TabsContext.Provider>
  );
};

const useTabs = () => {
  const context = useContext(TabsContext);
  if (context === undefined) {
    throw new Error("useTabs must be used within a TabsProvider");
  }

  return context;
};

export { TabsProvider, useTabs };
