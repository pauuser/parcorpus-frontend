import {Card, Label} from "@gravity-ui/uikit";
import styles from "./search-history.module.css"
import {ProfileElementCard} from "../ProfileElementCard/ProfileElementCard.tsx";
import {Magnifier} from "@gravity-ui/icons";
import {Pagination, PaginationProps} from '@gravity-ui/uikit';
import React, {ReactNode, useEffect, useState} from "react";
import {UserApi} from "../../api";
import {buildLanguagesString, getMaximumCardsNumber, saveToStorage} from "../../shared/utils.ts";
import {languagesInverse} from "../../shared/regionalInfo.ts";
import {useNavigate} from "react-router-dom";
import useWindowDimensions from "../../hooks/WindowSizeHook.ts";

export const SearchHistoryCard = () => {
    const { height } = useWindowDimensions();

    const [state, setState] = React.useState({page: 1,
        pageSize: getMaximumCardsNumber(height, 80, height / 1.8),
        total: 10,
        total_pages: 2});

    const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) => {
        setState((prevState) => ({...prevState, page, pageSize}));
        updateHistory(page, pageSize);
    };

    const [history, setHistory ] = useState([] as ReactNode[]);

    const navigate = useNavigate();
    const updateHistory = (page: number, pageSize: number) => {
        const api = new UserApi();

        api.historyGet(page, pageSize).then(
            (result) => {
                const searchHistory = result.data;

                const {total_count, total_pages} = searchHistory.page_info;
                const total = total_count;
                setState((prevState) => ({...prevState, page, pageSize, total, total_pages}));

                const elements = searchHistory.items.map(history => {
                    const info = {
                        mainText: history.word,
                        subText: buildLanguagesString(history.source_language_short_name, history.destination_language_short_name),
                        buttonIcon: Magnifier,
                        buttonOnClick: () => {
                            saveToStorage("word", history.word);
                            saveToStorage("sourceLanguage", languagesInverse[history.source_language_short_name]);
                            saveToStorage("targetLanguage", languagesInverse[history.destination_language_short_name]);
                            navigate('/search');
                        }
                    };

                    return <ProfileElementCard {...info}/>
                });

                setHistory(elements);
            },
            (error) => {
                console.log(error);
            }
        );
    };

    useEffect(() => {
        updateHistory(state.page, state.pageSize);
    }, []);

    const getCard = () => {
        if (history.length == 0) {
            return <Card size="l"
                         className={styles.search_history_card__top_element_no_content}>
                        <div className={styles.search_history__no_content}>
                            You haven't searched for anything so far. Let's fix that!
                        </div>
                   </Card>
        }

        return <Card size="l"
                     className={styles.search_history_card__top_element}>
                    <div className={styles.search_history_card__cards}>
                        {history}
                    </div>
                    <Pagination page={state.page}
                                pageSize={state.pageSize}
                                total={state.total}
                                onUpdate={handleUpdate}
                                className={styles.search_history__pagination}
                                compact={true}/>
                </Card>
    }

    return (
        <div className={styles.search_history_card__container}>
            <Label size="m"
                   className={styles.search_history_card__label}>
                Search history
            </Label>
            {getCard()}
        </div>
    );
};