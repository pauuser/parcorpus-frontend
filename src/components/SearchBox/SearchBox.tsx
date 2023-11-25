import {TextInput, Select, Button, Icon} from '@gravity-ui/uikit';
import styles from "./search-box.module.css"
import {Magnifier} from "@gravity-ui/icons";
import {regionalInfo} from "../../shared/regionalInfo.ts";

export const SearchBox = () => {
    return (
        <div className={styles.searchBox__container}>
            <TextInput size="xl"
                       view="normal"
                       className={styles.searchBox__box}
                       defaultValue={"Mathematics"}/>
            <div className={styles.searchBox__selectors}>
                <Select size="xl"
                        view="normal"
                        defaultValue={["English"]}
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
                        defaultValue={["Russian"]}
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
                        className={styles.searchBox__button}>
                    <Icon data={Magnifier} className={styles.searchBox__magnifier} />
                </Button>
            </div>
        </div>
    );
};