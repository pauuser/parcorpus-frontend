import {Button, Card, Label} from "@gravity-ui/uikit";
import styles from "./filters-card.module.css";
import {NamedSelect} from "../NamedSelect/NamedSelect.tsx";
import {YearInput} from "../YearInput/YearInput.tsx";
import {getFromStorage, saveToStorage} from "../../shared/utils.ts";

interface FiltersCardProps {
    onApply: () => void
}

export const FiltersCard = (props: FiltersCardProps) => {
    return (
        <Card size="l"
              className={styles.filters_card__top_element}>
            <div className={styles.filters_card__upper_part}>
                <span className={styles.filters_card__titlediv}>
                    <Label className={styles.filters_card__title}>Filters</Label>
                </span>
                <span className={styles.filters_card__years}>
                    <YearInput name="Start year" defaultValue={getFromStorage("startYear") == null ? 0 : getFromStorage("startYear") as unknown as number} fieldName="startYear"/>
                    <YearInput name="End year" defaultValue={getFromStorage("endYear") == null ? 0 : getFromStorage("startYear") as unknown as number} fieldName="endYear"/>
                </span>
                <NamedSelect fieldName="Genre"
                             selectName="genre"
                             defaultValue={getFromStorage("genre") ?? "-"}
                             onChange={(val: string[]) => saveToStorage("genre", val[0])}
                             values={ [ "-", "Drama", "Romance", "Sci-Fi" ]} />
                <NamedSelect fieldName="Author"
                             selectName="author"
                             defaultValue={getFromStorage("author") ?? "-"}
                             onChange={(val: string[]) => saveToStorage("author", val[0])}
                             values={ ["-", "L. N. Tolstoy", "A. Rand", "A. S. Pushkin" ] } />
            </div>
            <div className={styles.filters_card__titlediv}>
                <Button className={styles.filters_card__button} onClick={props.onApply}>
                    Apply
                </Button>
            </div>
        </Card>
    );
};