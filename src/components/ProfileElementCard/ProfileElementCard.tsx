import {Button} from "@gravity-ui/uikit";
import styles from "./profile-element-card.module.css";

interface ElementProps {
    mainText: string;
    subText: string;
    buttonIcon: any;
    buttonOnClick: () => void;
}

export const ProfileElementCard = (props: ElementProps) => {
    return (
        <div className={styles.profile_element_card__wrapper}>
            <div className={styles.profile_element_card__text_wrapper}>
                <span className={styles.profile_element_card__main_text}>
                    {props.mainText}
                </span>
                <span>
                    {props.subText}
                </span>
            </div>
            <Button size="xl"
                    onClick={props.buttonOnClick}>
                <props.buttonIcon className={styles.profile_element_card__button} />
            </Button>
        </div>
    );
};