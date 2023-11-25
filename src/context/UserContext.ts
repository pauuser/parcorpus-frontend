import { UserDto } from "../api";
import { useContext, createContext } from "react";

interface UserContextType {
    isSignedIn: boolean;
    setIsSignedIn: (_: boolean) => void;
    user: UserDto | undefined;
    setUser: (_: UserDto | undefined) => void;
}

export const UserContext = createContext<UserContextType>({
    isSignedIn: false,
    setIsSignedIn: (_: boolean) => {},
    user: undefined,
    setUser: (_: UserDto | undefined) => {},
});

export const useUserContext = () => {
    return useContext(UserContext);
};
