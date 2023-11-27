import {Card, Label, Pagination, PaginationProps} from "@gravity-ui/uikit";
import styles from "./texts-card.module.css";
import {ProfileElementCard} from "../ProfileElementCard/ProfileElementCard.tsx";
import {Eye} from "@gravity-ui/icons";
import React, {ReactNode, useEffect, useState} from "react";
import {TextsApi} from "../../api";
import {buildTextSubtitle, buildTextTitle} from "../../shared/utils.ts";

interface TextsCardProps {
    setState: () => void
    setTextId: (_: number) => void
}

export const TextsCard = (props: TextsCardProps) => {
    const [state, setState] = React.useState({page: 1, pageSize: 5, total: 10, total_pages: 2});

    const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) => {
        setState((prevState) => ({...prevState, page, pageSize}));
        updateTexts(page, pageSize);
    };

    const [texts, setTexts ] = useState([] as ReactNode[]);

    const updateTexts = (page: number, pageSize: number) => {
        let api = new TextsApi();

        api.textsGet(page, pageSize).then(
            (result) => {
                let textsDto = result.data;

                let {total_count, total_pages} = textsDto.page_info;
                let total = total_count;
                setState((prevState) => ({...prevState, page, pageSize, total, total_pages}));
                
                let elements = textsDto.items.map(text => {
                    let info = {
                        mainText: buildTextTitle(text.title, text.creation_year),
                        subText: buildTextSubtitle(text.author, text.source_language, text.target_language),
                        buttonIcon: Eye,
                        buttonOnClick: () => {
                            props.setState();
                            props.setTextId(text.text_id);
                        }
                    };

                    return <ProfileElementCard {...info}/>
                });

                setTexts(elements);
            },
            (error) => {
                console.log(error);
            }
        );
    };

    useEffect(() => {
        updateTexts(state.page, state.pageSize);
    }, []);

    const getCard = () => {
        if (texts.length == 0) {
            return <Card size="l"
                         className={styles.texts_card__top_element_no_content}>
                <span className={styles.texts__no_content}>
                    Uploading your translations contributes to the community.
                </span>
                <span className={styles.texts__no_content}>
                     Make your contribution today!
                </span>
            </Card>
        }

        return <Card size="l"
                     className={styles.texts_card__top_element}>
            {texts}
            <Pagination page={state.page}
                        pageSize={state.pageSize}
                        total={state.total}
                        onUpdate={handleUpdate}
                        className={styles.texts__pagination}
                        compact={true}/>
        </Card>
    }

    return (
        <div className={styles.texts_card__container}>
            <Label size="m"
                   className={styles.texts_card__label}>
                Uploaded texts
            </Label>
            {getCard()}
        </div>
    );
};