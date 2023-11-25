import {Card, Label} from "@gravity-ui/uikit";
import styles from "./texts-card.module.css";
import {ProfileElementCard} from "../ProfileElementCard/ProfileElementCard.tsx";
import {Magnifier} from "@gravity-ui/icons";

export const TextsCard = () => {
    let test = {
        mainText: "Mathematics",
        subText: "Russian → English",
        buttonIcon: Magnifier,
        buttonOnClick: () => {}
    }

    return (
        <div className={styles.texts_card__container}>
            <Label size="m"
                   className={styles.texts_card__label}>
                Uploaded texts
            </Label>
            <Card size="l"
                  className={styles.texts_card__top_element}>
                <ProfileElementCard {...test}/>
            </Card>
        </div>
    );
};