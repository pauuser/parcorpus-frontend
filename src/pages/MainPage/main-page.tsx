import styles from "./main-page.module.css"
import {ParcorpusLogo} from "../../components/ParcorpusLogo/ParcorpusLogo.tsx";
import {SearchBox} from "../../components/SearchBox/SearchBox.tsx";
import {Contacts} from "../../components/Contacts/Contacts.tsx";
import {ProfileIcon} from "../../components/ProfileIcon/ProfileIcon.tsx";
import {useUserContext} from "../../context/UserContext.ts";
import {useNavigate} from "react-router-dom";
import React from "react";
import {SEARCH_ROUTE} from "../../shared/consts.ts";

const MainPage = () => {
    const { user } = useUserContext();
    const navigate = useNavigate();

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            navigate(SEARCH_ROUTE);
        }
    }

    return (
        <div className={styles.main} onKeyDown={handleKeyDown}>
            <div className={styles.main_upperbar}>
                <ParcorpusLogo />
                <ProfileIcon fullName={user?.name}/>
            </div>
            <div className={styles.main_title_searchBox__wrapper}>
                <div className={styles.main_titles__wrapper}>
                    <div className={styles.main_title__wrapper}>
                        <span className={styles.main_title__text}>
                            Brand-new translator&nbsp;
                        </span>
                        <span className={styles.main_title__text_colored}>
                            with usage examples
                        </span>
                    </div>
                    <div className={styles.main_subtitle__text}>
                        Start your journey right away
                    </div>
                </div>
                <div className={styles.main__search_box_wrapper}>
                    <SearchBox onButtonClick={() => navigate(SEARCH_ROUTE)}/>
                </div>
            </div>
            <Contacts />
        </div>
    )
}

export default MainPage;