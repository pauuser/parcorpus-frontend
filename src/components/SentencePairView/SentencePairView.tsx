import styles from "./sentence-pair-view.module.css"

interface SentencePairViewProps {
    sourceText: string,
    targetText: string
}

export const SentencePairView = (props: SentencePairViewProps) => {
    return (
        <div className={styles.sentence_pair_view__row}>
            <span className={styles.sentence_pair_view__sentence}>
                {props.sourceText}
            </span>
            <span className={styles.sentence_pair_view__sentence}>
                {props.targetText}
            </span>
        </div>
    );
};