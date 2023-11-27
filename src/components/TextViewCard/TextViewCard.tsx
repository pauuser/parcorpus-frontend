import styles from "./text-view-card.module.css";
import {Button, Card, Pagination, PaginationProps} from "@gravity-ui/uikit";
import {Xmark} from "@gravity-ui/icons";
import React, {ReactNode, useEffect, useState} from "react";
import {TextsApi} from "../../api";
import {SentencePairView} from "../SentencePairView/SentencePairView.tsx";
import useWindowDimensions from "../../hooks/WindowSizeHook.ts";
import {getMaximumCardsNumber} from "../../shared/utils.ts";

interface TextViewCardProps {
    action: () => void
    textId: number
}

export const TextViewCard = (props: TextViewCardProps) => {
    const { height, width } = useWindowDimensions();

    const [state, setState] = React.useState({page: 1,
        pageSize: getMaximumCardsNumber(height, width / 15, 100),
        total: 10,
        total_pages: 2});

    const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) => {
        setState((prevState) => ({...prevState, page, pageSize}));
        updateSentences(page, pageSize);
    };

    const [sentences, setSentences ] = useState([] as ReactNode[]);
    const [author, setAuthor] = useState("");
    const [title, setTitle] = useState("");

    const updateSentences = (page: number, pageSize: number) => {
        let api = new TextsApi();
        console.log(page, pageSize);

        api.textIdGet(props.textId, page, pageSize).then(
            (result) => {
                let sentencesDto = result.data;

                let {total_count, total_pages} = sentencesDto.page_info;
                let total = total_count;
                setState((prevState) => ({...prevState, page, pageSize, total, total_pages}));

                let elements = sentencesDto.text.sentences.map(sentence => {
                    let info = {
                        sourceText: sentence.source_text,
                        targetText: sentence.aligned_translation
                    };

                    return <SentencePairView {...info}/>
                });

                setSentences(elements);
                setAuthor(sentencesDto.text.text.author);
                setTitle(sentencesDto.text.text.title);
            },
            (error) => {
                console.log(error);
            }
        );
    };

    useEffect(() => {
        updateSentences(state.page, state.pageSize);
    }, []);

    const getCard = () => {
        return (
            <div className={styles.text_view_card__card_wrapper}>
                <div className={styles.text_view_card__upperbar}>
                    <div className={styles.text_view_card__title_author}>
                        <span className={styles.text_view_card__title}>{title}</span>
                        <span className={styles.text_view_card__author}>{author}</span>
                    </div>
                    <Button className={styles.text_view_card__button}
                            onClick={props.action}>
                        <Xmark />
                    </Button>
                </div>
                <div className={styles.text_view_card__sentences}>
                    <div className={styles.text_view_card__text}>
                        {sentences}
                    </div>
                    <div className={styles.text_view_card__pagination}>
                        <Pagination page={state.page}
                                    pageSize={state.pageSize}
                                    total={state.total}
                                    onUpdate={handleUpdate}
                                    className={styles.text_view_card__paging_element}
                                    compact={true}/>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <Card size="l"
              className={styles.text_view_card__card}>
            {getCard()}
        </Card>
    );
};