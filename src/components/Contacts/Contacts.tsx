import {Button, Icon} from "@gravity-ui/uikit";
import {CircleInfo, LogoGitlab, LogoTelegram} from "@gravity-ui/icons";
import styles from "./Contacts.module.css"
import {GIT_LINK, INFORMATION_LINK, TELEGRAM_LINK} from "../../shared/consts.ts";

export const Contacts = () => {
    return (
        <div className={styles.contacts__container}>
            <Button size="xl"
                    view="normal"
                    className={styles.contacts__button}
                    onClick={() => location.href = INFORMATION_LINK}>
                <Icon data={CircleInfo} className={styles.contacts__button__logo}></Icon>
            </Button>
            <Button size="xl"
                    view="normal"
                    className={styles.contacts__button}
                    onClick={() => location.href = TELEGRAM_LINK}>
                <Icon data={LogoTelegram} className={styles.contacts__button__logo}></Icon>
            </Button>
            <Button size="xl"
                    view="normal"
                    className={styles.contacts__button}
                    onClick={() => location.href = GIT_LINK}>
                <Icon data={LogoGitlab} className={styles.contacts__button__logo}></Icon>
            </Button>
        </div>
    );
};