import {TextInput} from "@gravity-ui/uikit";
import styles from "./year-input.module.css";
import {saveToStorage} from "../../shared/utils.ts";

interface InputProps {
    name: string,
    defaultValue: number,
    fieldName: string
}

export const YearInput = (props: InputProps) => {
    return (
        <div className={styles.year_input__wrapper}>
            <span className={styles.year_input__text}>{props.name}</span>
            <TextInput size="xl"
                       view="normal"
                       name={props.fieldName}
                       onChange={(val) => saveToStorage(props.fieldName, val.target.value)}
                       className={styles.year_input__box}
                       defaultValue={props.defaultValue?.toString()}/>
        </div>
    );
};