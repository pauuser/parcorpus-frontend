import {useNavigate} from "react-router-dom";
import {useUserContext} from "../../context/UserContext.ts";
import {AUTH_ROUTE} from "../../shared/consts.ts";
import {useEffect} from "react";
import {ParcorpusLogo} from "../../components/ParcorpusLogo/ParcorpusLogo.tsx";
import {UserData} from "../../components/UserData/UserData.tsx";
import {UserDto} from "../../api";
import {SearchHistoryCard} from "../../components/SearchHistoryCard/SearchHistoryCard.tsx";
import {TextsCard} from "../../components/TextsCard/TextsCard.tsx";
import styles from "./profile-page.module.css"

const ProfilePage = () => {
    let navigate = useNavigate();
    const { isSignedIn, user } = useUserContext();

    useEffect(() => {
        if (!isSignedIn) {
            navigate(AUTH_ROUTE);
        }
    }, []);

    let userDto = user as UserDto;

    return (
        <div>
            <div>
                <ParcorpusLogo />
            </div>
            <div>
                <UserData {...userDto} />
            </div>
            <div className={styles.profile_page__containers}>
                <SearchHistoryCard />
                <TextsCard />
            </div>
        </div>
    )
}

export default ProfilePage;