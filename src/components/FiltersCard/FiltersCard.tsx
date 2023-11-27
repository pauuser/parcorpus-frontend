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
            <Label className={styles.filters_card__title}>Filters</Label>
            <span className={styles.filters_card__years}>
                <YearInput name="Start year" defaultValue={0} fieldName="startYear"/>
                <YearInput name="End year" defaultValue={2024} fieldName="endYear"/>
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
            <Button className={styles.filters_card__button} onClick={props.onApply}>
                Apply
            </Button>
        </Card>
    );
};