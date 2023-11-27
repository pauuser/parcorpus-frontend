import styles from "./named-select.module.css";
import {Select} from "@gravity-ui/uikit";

interface NamedSelectProps {
    fieldName: string,
    selectName: string,
    defaultValue: string,
    onChange: (_: string[]) => void,
    values: string[]
}

export const NamedSelect = (value: NamedSelectProps) => {
    return (
        <div className={styles.named_select__field}>
            <p className={styles.named_select__text}>{value.fieldName}</p>
            <Select size="xl"
                    view="normal"
                    name={value.selectName}
                    defaultValue={ [ value.defaultValue ] }
                    className={styles.named_select__inline_selector}
                    popupClassName={styles.named_select__popup}
                    onUpdate={value.onChange}>
                {value.values.map((item) => (
                    <Select.Option
                        key={item}
                        value={item}
                        content={item}
                    />))
                }
            </Select>
        </div>
    );
};