import {Card, Label} from "@gravity-ui/uikit";
import styles from "./search-history.module.css"
import {ProfileElementCard} from "../ProfileElementCard/ProfileElementCard.tsx";
import {Magnifier} from "@gravity-ui/icons";
import {Pagination, PaginationProps} from '@gravity-ui/uikit';
import React, {ReactNode, useEffect, useState} from "react";
import {UserApi} from "../../api";
import {buildLanguagesString, saveToStorage} from "../../shared/utils.ts";
import {languagesInverse} from "../../shared/regionalInfo.ts";
import {useNavigate} from "react-router-dom";

export const SearchHistoryCard = () => {
    const [state, setState] = React.useState({page: 1, pageSize: 5, total: 10, total_pages: 2});

    const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) => {
        setState((prevState) => ({...prevState, page, pageSize}));
        updateHistory(page, pageSize);
    };

    const [history, setHistory ] = useState([] as ReactNode[]);

    let navigate = useNavigate();
    const updateHistory = (page: number, pageSize: number) => {
        let api = new UserApi();

        api.historyGet(page, pageSize).then(
            (result) => {
                let searchHistory = result.data;

                let {total_count, total_pages} = searchHistory.page_info;
                let total = total_count;
                setState((prevState) => ({...prevState, page, pageSize, total, total_pages}));

                let elements = searchHistory.items.map(history => {
                    let info = {
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
                    {history}
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