import {Button, Select, TextInput} from '@gravity-ui/uikit';
import styles from "./AuthCard.module.css"

interface InputField {
    fieldName: string;
    defaultValue: string;
    name: string;
    onChange: (e: any) => void;
    type?: undefined | string;
}

interface SelectorField {
    fieldName: string;
    defaultValue: string;
    values: Array<string>;
    name: string;
    onChange: (e: any) => void;
    type?: undefined | string;
}

interface AuthCardProps {
    name: string;
    fields: Array<InputField | Array<InputField> | Array<SelectorField>>;
    buttonText: string;
    buttonOnClick: () => void;
    alternativeLinkText: string,
    alternativeLinkOnClick: () => void
}

export function AuthCard({name, fields,
    buttonText, buttonOnClick, alternativeLinkOnClick, alternativeLinkText}: AuthCardProps) {

    function GetElementsDependingOnType(elements: Array<InputField | Array<InputField> | Array<SelectorField>>) {
        return elements.map(element => {
            if (Array.isArray(element))
            {
                let values = element; // Inline elements are built here
                if ("values" in values[0]) {
                    let selectors = values as SelectorField[];
                    return (<span className={styles.auth_card__inline}>
                    {selectors.map(value => (
                        <div className={styles.auth_card__field}>
                            <p className={styles.auth_card__text}>{value.fieldName}</p>
                            <Select size="xl"
                                    view="normal"
                                    name={value.name}
                                    defaultValue={ [ value.defaultValue ] }
                                    className={styles.auth_card__inline_selector}
                                    popupClassName={styles.auth_card__popup}
                                    onUpdate={value.onChange}>
                                {value.values.map((item) => (
                                    <Select.Option
                                        key={item}
                                        value={item}
                                        content={item}
                                    />))
                                }
                            </Select>
                        </div>))}
                    </span>);
                }

                return (<span className={styles.auth_card__inline}>
                {values.map(value => (
                    <div className={styles.auth_card__field}>
                        <p className={styles.auth_card__text}>{value.fieldName}</p>
                        <TextInput size="xl"
                                   view="normal"
                                   name={value.name}
                                   defaultValue={value.defaultValue}
                                   className={styles.auth_card__inline_text_input}
                                   type={value.type}
                                   onChange={value.onChange}/>
                    </div>))}
                </span>);
            }

            // Otherwise simple InputText here
            return (
                <div className={styles.auth_card__field}>
                    <p className={styles.auth_card__text}>{element.fieldName}</p>
                    <TextInput size="xl"
                               view="normal"
                               name={element.name}
                               defaultValue={element.defaultValue}
                               className={styles.auth_card__text_input}
                               type={element.type}
                               onChange={element.onChange}/>
                </div>);
        });
    }

    return (
        <div className={styles.auth_card__wrapper}>
            <h1>{name}</h1>
            { GetElementsDependingOnType(fields) }
            <div className={styles.auth_card__buttons}>
                <Button size="xl"
                        view="normal"
                        onClick={buttonOnClick}
                        className={styles.auth_card__button}>{buttonText}</Button>
                <Button size="xl"
                        view="normal"
                        onClick={alternativeLinkOnClick}
                        className={styles.auth_card__alt_button}>{alternativeLinkText}</Button>
            </div>
        </div>
    );
}