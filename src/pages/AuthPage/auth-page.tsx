import {Card} from "@gravity-ui/uikit";
import styles from "./auth-page.module.css"
import {AuthCard} from "../../components/AuthCard/AuthCard.tsx";
import {ParcorpusLogo} from "../../components/ParcorpusLogo/ParcorpusLogo.tsx";
import {useState} from "react";
import {useFormik} from "formik";
import {AuthApi, UserApi, UserDto} from "../../api";
import {useNavigate} from "react-router-dom";
import {setAccessToken, setRefreshToken} from "../../shared/utils.ts";
import {useUserContext} from "../../context/UserContext.ts";
import {authFields} from "./authFields.ts";
import {regionalInfo} from "../../shared/regionalInfo.ts";

const getAndSetUser = (userApi: UserApi,
                 setUser: (_: UserDto) => void,
                 setIsSignedIn: (_: boolean) => void ) => {
    userApi.meGet().then(
        (result) => {
            if (result?.status === 200) {
                setUser(result.data);
                setIsSignedIn(true);
            }
        },
        (error) => {
            console.log(error)
        });
}

const AuthPage = () => {
    const [isLogInCard, setLogInCard] = useState<boolean>(true);

    const navigate = useNavigate();
    const { setIsSignedIn, setUser } = useUserContext();

    const onSubmit = () => { }
    const form = useFormik({
        initialValues: {
            username: "pauuser.work@gmail.com",
            password: "FilthyHacker24",
            repeatPassword: "FilthyHacker24",
            name: "Pavel",
            surname: "Ivanov",
            country: "Canada",
            nativeLanguage: "English"
        },
        onSubmit,
    })

    const name = isLogInCard
        ? "Sign in"
        : "Sign up";

    const fields = authFields(isLogInCard, form);

    const buttonText = isLogInCard
        ? "Sign in"
        : "Sign up";

    const authApi = new AuthApi();
    const userApi = new UserApi();
    const buttonOnClick = isLogInCard
        ? () => {
            authApi.loginPost({
                email: form.values.username,
                password: form.values.password
            }).then(
                (result) => {
                    if (result?.status === 200) {
                        const { access_token, refresh_token } = result.data;
                        setAccessToken(access_token);
                        setRefreshToken(refresh_token);

                        getAndSetUser(userApi, setUser, setIsSignedIn);

                        navigate('/');
                    }
                },
                (error) => console.log(`Error: ${error}`)
            )
        }
        : () => {
            authApi.registerPost({
                name: form.values.name,
                surname: form.values.surname,
                email: form.values.username,
                country_name: form.values.country,
                language_short_name: regionalInfo[form.values.nativeLanguage],
                password: form.values.password
            }).then(
                (result) => {
                    if (result?.status === 200) {
                        const { access_token, refresh_token } = result.data;
                        setAccessToken(access_token);
                        setRefreshToken(refresh_token);

                        getAndSetUser(userApi, setUser, setIsSignedIn);

                        navigate('/');
                    }
                },
                (error) => console.log(error)
            )
        };

    const alternativeLinkText = isLogInCard
        ? "Create an account"
        : "I already have an account";

    const alternativeButtonOnClick = isLogInCard
        ? () => setLogInCard(false)
        : () => setLogInCard(true);

    return (
        <div className={styles.card__wrapper}>
            <div className={styles.main_upperbar}>
                <ParcorpusLogo />
            </div>
            <div className={styles.card__card}>
                <Card size="l"
                      className={styles.card__top_element}>
                    <AuthCard  name={name}
                               fields={fields}
                               buttonText={buttonText}
                               buttonOnClick={buttonOnClick}
                               alternativeLinkText={alternativeLinkText}
                               alternativeLinkOnClick={alternativeButtonOnClick}
                    />
                </Card>
            </div>
        </div>
    )
}

export default AuthPage;