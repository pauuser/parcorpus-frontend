import styles from "./concordance-element.module.css";
import {buildAuthorTitle, buildSentences} from "../../shared/utils.ts";

interface ElementProps {
    word: string;
    sourceSentence: string;
    translatedSentence: string;
    author: string;
    title: string;
}

export const ConcordanceElement = (props: ElementProps) => {
    return (
        <div className={styles.concordance_element__wrapper}>
            <div className={styles.concordance_element__text_wrapper}>
                <span className={styles.profile_element_card__main_text}>
                    {props.word}
                </span>
                <span>
                    {buildSentences(props.sourceSentence, props.translatedSentence)}
                </span>
            </div>
            <span className={styles.concordance_element__author}>
                {buildAuthorTitle(props.title, props.author)}
            </span>
        </div>
    );
};