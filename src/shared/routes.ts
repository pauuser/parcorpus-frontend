import {AUTH_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, SEARCH_ROUTE} from "./consts.ts";
import AuthPage from "../pages/AuthPage/auth-page.tsx";
import MainPage from "../pages/MainPage/main-page.tsx";
import SearchPage from "../pages/SearchPage/search-page.tsx";
import ProfilePage from "../pages/ProfilePage/profile-page.tsx";

export const authRoutes = [
    {
        path: SEARCH_ROUTE,
        element: SearchPage,
    },
    {
        path: PROFILE_ROUTE,
        element: ProfilePage,
    },
    {
        path: MAIN_ROUTE,
        element: MainPage,
    }
];

export const noAuthRoutes = [
    {
        path: AUTH_ROUTE,
        element: AuthPage,
    },
    {
        path: SEARCH_ROUTE,
        element: AuthPage,
    },
    {
        path: PROFILE_ROUTE,
        element: AuthPage,
    },
    {
        path: MAIN_ROUTE,
        element: MainPage,
    }
];
