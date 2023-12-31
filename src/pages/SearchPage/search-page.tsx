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
import {getFromStorage, getMaximumCardsNumber} from "../../shared/utils.ts";
import useWindowDimensions from "../../hooks/WindowSizeHook.ts";
import {useSearchParams} from "react-router-dom";
import {parametersList} from "../../shared/consts.ts";

const SearchPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const { user } = useUserContext();

    const { height } = useWindowDimensions();

    const [state, setState] = React.useState({page: 1,
        pageSize: getMaximumCardsNumber(height, 200, 100),
        total: 10,
        total_pages: 2});

    const handleUpdate: PaginationProps['onUpdate'] = (page, pageSize) => {
        setState((prevState) => ({...prevState, page, pageSize}));
        updateConcordance(page, pageSize);
    };

    const [concordance, setConcordance ] = useState([] as ReactNode[]);

    const updateConcordance = (page: number, pageSize: number) => {
        const api = new TextsApi();

        api.concordanceGet(searchParams.get("word") as string,
            searchParams.get("sourceLanguage") as string,
            searchParams.get("targetLanguage") as string,
            page,
            pageSize,
            searchParams.get("genre") as string,
            Number(searchParams.get("startYear")),
            Number(searchParams.get("endYear")),
            searchParams.get("author") as string).then(
            (result) => {
                const concordance = result.data;
                console.log(concordance)

                const {total_count, total_pages} = concordance.page_info;
                const total = total_count;
                setState((prevState) => ({...prevState, page, pageSize, total, total_pages}));

                const elements = concordance.items.map(item => {
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
        parametersList.forEach((value) => {
            const stored = getFromStorage(value);
            if (stored != undefined) {
                setSearchParams(p => {
                    p.set(value, stored);
                    return p;
                });
            }
        });
        updateConcordance(state.page, state.pageSize);
    }, []);

    const getCard = () => {
        if (concordance.length == 0) {
            return <div className={styles.search_history__no_content}>
                    Seems like we don't know this word yet...
                </div>
        }

        return <div className={styles.search_page__results_wrapper}>
            <div className={styles.search_page__concordance_wrapper}>
                {concordance}
            </div>
            <div className={styles.search_page__pagination_container}>
                <Pagination page={state.page}
                            pageSize={state.pageSize}
                            total={state.total}
                            onUpdate={handleUpdate}
                            compact={true}/>
            </div>
        </div>
    }

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            updateConcordance(1, getMaximumCardsNumber(height, 200, 100));
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
                        parametersList.forEach((value) => {
                            const stored = getFromStorage(value);
                            if (stored != undefined) {
                                setSearchParams(p => {
                                    p.set(value, stored);
                                    return p;
                                });
                            }
                        });
                        updateConcordance(1, getMaximumCardsNumber(height, 200, 100))
                    }} />
                </div>
                <div className={styles.search_page__main_area_wrapper}>
                    <div>
                        <SearchBox onButtonClick={() => {
                            parametersList.forEach((value) => {
                                const stored = getFromStorage(value);
                                if (stored != undefined) {
                                    setSearchParams(p => {
                                        p.set(value, stored);
                                        return p;
                                    });
                                }
                            });
                            updateConcordance(1, getMaximumCardsNumber(height, 200, 100))}
                        } />
                    </div>
                    {getCard()}
                </div>
            </div>
        </div>
    )
}

export default SearchPage;