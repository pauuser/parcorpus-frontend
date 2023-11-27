import {FiltersCard} from "../../components/FiltersCard/FiltersCard.tsx";
import styles from "./search-page.module.css"
import {SearchBox} from "../../components/SearchBox/SearchBox.tsx";
import {ParcorpusLogo} from "../../components/ParcorpusLogo/ParcorpusLogo.tsx";
import {ProfileIcon} from "../../components/ProfileIcon/ProfileIcon.tsx";
import {useUserContext} from "../../context/UserContext.ts";
import {ConcordanceElement} from "../../components/ConcordanceElement/ConcordanceElement.tsx";
import React, {ReactNode, useEffect, useState} from "react";
import {Pagination, PaginationProps} from "@gravity-ui/uikit";
import {TextsApi} from "../../api";
import {getFromStorage} from "../../shared/utils.ts";

const SearchPage = () => {
    const { user } = useUserContext();

    const [state, setState] = React.useState({page: 1, pageSize: 5, total: 10, total_pages: 2});

    const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) => {
        setState((prevState) => ({...prevState, page, pageSize}));
        updateConcordance(page, pageSize);
    };

    const [concordance, setConcordance ] = useState([] as ReactNode[]);

    const updateConcordance = (page: number, pageSize: number) => {
        let api = new TextsApi();

        api.concordanceGet(getFromStorage("word") as string,
            getFromStorage("sourceLanguage") as string,
            getFromStorage("targetLanguage") as string,
            page,
            pageSize,
            getFromStorage("genre") as string,
            Number(getFromStorage("startYear")),
            Number(getFromStorage("endYear")),
            getFromStorage("author") as string).then(
            (result) => {
                let concordance = result.data;

                let {total_count, total_pages} = concordance.page_info;
                let total = total_count;
                setState((prevState) => ({...prevState, page, pageSize, total, total_pages}));

                let elements = concordance.items.map(item => {
                    return <ConcordanceElement word={item.aligned_word}
                                               sourceSentence={item.source_text}
                                               translatedSentence={item.aligned_translation}
                                               author={item.author}
                                               title={item.title} />
                });

                setConcordance(elements);
            },
            (error) => {
                console.log(error);
                setConcordance([]);
            }
        );
    };

    useEffect(() => {
        updateConcordance(state.page, state.pageSize);
    }, []);

    const getCard = () => {
        if (concordance.length == 0) {
            return <div className={styles.search_history__no_content}>
                    Seems like we don't know this word yet...
                </div>
        }

        return <>
            {concordance}
            <Pagination page={state.page}
                        pageSize={state.pageSize}
                        total={state.total}
                        onUpdate={handleUpdate}
                        className={styles.search_history__pagination}
                        compact={true}/>
        </>
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            updateConcordance(1, 5);
        }
    }

    return (
        <div className={styles.search_page__container}
            onKeyDown={handleKeyDown}>
            <div className={styles.search_page__upperbar}>
                <ParcorpusLogo />
                <ProfileIcon fullName={user?.name}/>
            </div>
            <div className={styles.search_page__wrapper}>
                <div className={styles.search_page__filters}>
                    <FiltersCard onApply={() => {
                        updateConcordance(1, 5)
                    }} />
                </div>
                <div className={styles.search_page__main_area_wrapper}>
                    <SearchBox onButtonClick={() => {
                        updateConcordance(1, 5)}
                    } />
                    {getCard()}
                </div>
            </div>
        </div>
    )
}

export default SearchPage;