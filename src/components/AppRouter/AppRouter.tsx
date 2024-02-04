import {useUserContext} from "../../context/UserContext.ts";
import {useEffect} from "react";
import {AuthApi, UserApi} from "../../api";
import {MAIN_ROUTE} from "../../shared/consts.ts";
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, noAuthRoutes} from "../../shared/routes.ts";
import {getFromStorage, setAccessToken, setRefreshToken} from "../../shared/utils.ts";

export const AppRouter = () => {
    const { isSignedIn, setIsSignedIn, setUser } = useUserContext();
    const userApi = new UserApi();

    useEffect(() => {
        userApi.meGet().then(
            (result) => {
                if (result?.status === 200) {
                    setUser(result.data);
                    setIsSignedIn(true);
                }
            },
            (error) => {
                const refresh = getFromStorage("refresh_token");
                const access = getFromStorage("access_token");
                if (refresh != undefined && access != refresh) {
                    const authApi = new AuthApi();
                    authApi.refreshPost({
                        access_token: access as string,
                        refresh_token: refresh as string
                    }).then(
                        (result) => {
                            setAccessToken(result.data.access_token);
                            setRefreshToken(result.data.refresh_token);
                            setIsSignedIn(true);
                        },
                        (error) => {
                            console.log(error);
                        }
                    )
                } else {
                    console.log(error)
                }
            }
        );
    }, []);

    return (
        <Routes>
            {!isSignedIn &&
                noAuthRoutes.map(({ path, element: Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            {isSignedIn &&
                authRoutes.map(({ path, element: Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
        </Routes>
    );
};