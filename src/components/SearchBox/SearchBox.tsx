import {TextInput, Select, Button, Icon} from '@gravity-ui/uikit';
import styles from "./search-box.module.css"
import {Magnifier} from "@gravity-ui/icons";
import {regionalInfo} from "../../shared/regionalInfo.ts";
import {getFromStorage, saveToStorage} from "../../shared/utils.ts";

interface SearchBoxProps {
    onButtonClick: () => void
}

export const SearchBox = (props: SearchBoxProps) => {
    return (
        <div className={styles.searchBox__container}>
            <TextInput size="xl"
                       view="normal"
                       name="word"
                       className={styles.searchBox__box}
                       onChange={(val) => saveToStorage("word", val.target.value)}
                       defaultValue={getFromStorage("word") ?? "Mathematics"}/>
            <div className={styles.searchBox__selectors}>
                <Select size="xl"
                        view="normal"
                        name="sourceLanguage"
                        onUpdate={(val: string[]) => saveToStorage("sourceLanguage", val[0])}
                        defaultValue={[getFromStorage("sourceLanguage") ?? "English"]}
                        className={styles.searchBox__select}
                        popupClassName={styles.auth_card__select_popup}>
                            {Object.keys(regionalInfo).map((lang) => (
                                <Select.Option
                                    key={lang}
                                    value={lang}
                                    content={lang}
                                />))
                            }
                </Select>
                <Select size="xl"
                        view="normal"
                        name="targetLanguage"
                        onUpdate={(val: string[]) => saveToStorage("targetLanguage", val[0])}
                        defaultValue={[getFromStorage("targetLanguage") ?? "Russian"]}
                        className={styles.searchBox__select}
                        popupClassName={styles.auth_card__select_popup}>
                            {Object.keys(regionalInfo).map((lang) => (
                                <Select.Option
                                    key={lang}
                                    value={lang}
                                    content={lang}
                                />))
                            }
                </Select>
                <Button size="xl"
                        view="normal"
                        className={styles.searchBox__button}
                        onClick={props.onButtonClick}>
                    <Icon data={Magnifier} className={styles.searchBox__magnifier} />
                </Button>
            </div>
        </div>
    );
};