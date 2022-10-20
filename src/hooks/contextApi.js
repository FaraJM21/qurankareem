const { createContext, useState, useContext } = require("react");

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [colorTheme, setColorTheme] = useState('light-mode');
  const [openSidebar, setOpenSidebar] = useState(false);
  const [temp, setTemp] = useState("templatedef");

    const handleTheme = (theme) => {
      if(theme === "dark-mode"){
        setTemp('template1')
      }
      // else{
      //   setTemp('templatedef')
      // }
      setColorTheme(theme);
    };

   
  const handleClick = () => {
    setOpenSidebar(!openSidebar);
  };

  const handleTemp = (temp) => {
    
    
    setTemp(temp);
  };

  return (
    <AppContext.Provider value={{ handleTemp, handleClick, openSidebar, handleTheme}}>
      <div className={`wrapper ${colorTheme === 'dark-mode' ? 'dark-mode' : 'light-mode'}`} id={`${temp}`}>{children}</div>
    </AppContext.Provider>
  );
};

const useGLobalContext = () => {
  return useContext(AppContext)
}

export { AppProvider, useGLobalContext }