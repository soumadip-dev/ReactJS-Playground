import { createContext, useState } from 'react';

//create the context
export const GlobalContext = createContext(null);

//create the global state that receipe component as a children

function GlobalState({ children }) {
  const [count, setCount] = useState(0);

  function handleChangeCount() {
    setCount(count => (count += 1));
  }

  return (
    <GlobalContext.Provider value={{ count, handleChangeCount }}>{children}</GlobalContext.Provider>
  );
}

export default GlobalState;
