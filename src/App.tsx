import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import './App.css'
import {UserContext} from "./context/UserContext.ts";
import {AppRouter} from "./components/AppRouter/AppRouter.tsx";
import {UserDto} from "./api";

function App() {
    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
    const [user, setUser] = useState<UserDto>();

    return (
    <>
      <UserContext.Provider
          value={{
              isSignedIn: isSignedIn,
              setIsSignedIn: setIsSignedIn,
              user: user,
              setUser: setUser
        }}
      >
          <BrowserRouter>
            <AppRouter/>
          </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App;
