// import { useState } from "react";
// import "./App.css";
// import UserContextProvider from "./context/UserContextProvider";
// import Login from "./components/Login";
// import Profile from "./components/Profile";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <UserContextProvider>
//         <h1>Hello and Welcome</h1>
//         <Login />
//         <Profile />
//       </UserContextProvider>
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./components/Themebtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightTheme = () => {
    setThemeMode("light");
  };
  const darkTheme = () => {
    setThemeMode("dark");
  };

  //actual change in theme
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themeBtn */}
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            {/* Card */}
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
