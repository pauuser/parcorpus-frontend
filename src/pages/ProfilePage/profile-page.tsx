import {useUserContext} from "../../context/UserContext.ts";
import {useState} from "react";
import {ParcorpusLogo} from "../../components/ParcorpusLogo/ParcorpusLogo.tsx";
import {UserData} from "../../components/UserData/UserData.tsx";
import {UserDto} from "../../api";
import {SearchHistoryCard} from "../../components/SearchHistoryCard/SearchHistoryCard.tsx";
import {TextsCard} from "../../components/TextsCard/TextsCard.tsx";
import styles from "./profile-page.module.css"
import {TextViewCard} from "../../components/TextViewCard/TextViewCard.tsx";

const ProfilePage = () => {
    const {  user } = useUserContext();

    const userDto = user as UserDto;

    const [ isViewingText, setViewingText ] = useState(false);
    const [ textId, setTextId ] = useState(0);

    const getComponent = () => {
        if (isViewingText) {
            return (
                <TextViewCard textId={textId} action={() => setViewingText(false)} />
            )
        }
        else {
            return (
                <div className={styles.profile_page_wrapper}>
                    <div className={styles.profile_page_upper}>
                        <div>
                            <ParcorpusLogo />
                        </div>
                        <div>
                            <UserData {...userDto} />
                        </div>
                    </div>
                    <div className={styles.profile_page__containers}>
                        <div className={styles.profile_page_profile_card}>
                            <SearchHistoryCard />
                        </div>
                        <div className={styles.profile_page_profile_card}>
                            <TextsCard setState={() => setViewingText(true)}
                                       setTextId={(num: number) => setTextId(num)} />
                        </div>
                    </div>
                </div>
            )
        }
    }

    return getComponent();
}

export default ProfilePage;