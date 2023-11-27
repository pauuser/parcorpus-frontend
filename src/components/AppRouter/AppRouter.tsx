import {useUserContext} from "../../context/UserContext.ts";
import {useEffect} from "react";
import {UserApi} from "../../api";
import {MAIN_ROUTE} from "../../shared/consts.ts";
import {Navigate, Route, Routes} from "react-router-dom";
import {authRoutes, noAuthRoutes} from "../../shared/routes.ts";

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
                console.log(error)
                if (error.status === 401) {
                    console.log('REFRESH!!')
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