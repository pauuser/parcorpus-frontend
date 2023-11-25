import {countries, regionalInfo} from "../../shared/regionalInfo.ts";

export const authFields = (isLogInCard: boolean, form: any) => {
    let fields =
        isLogInCard
        ? [
            {
                fieldName: "Email",
                defaultValue: "pauuser.work@gmail.com",
                name: "username", onChange:
                form.handleChange
            },
            {
                fieldName: "Password",
                defaultValue: "FilthyHacker24",
                name: "password",
                onChange: form.handleChange,
                type: "password" },
        ]
        : [
            [
                {
                    fieldName: "Name",
                    defaultValue: "Pavel",
                    name: "name",
                    onChange: form.handleChange
                },
                {
                    fieldName: "Surname",
                    defaultValue: "Ivanov",
                    name: "surname",
                    onChange: form.handleChange
                }
            ],
            [
                {
                    fieldName: "Country",
                    defaultValue: "Canada",
                    values: countries,
                    name: "country",
                    onChange: (val: string[]) => form.values["country"] = val[0]
                },
                {
                    fieldName: "Native Language",
                    defaultValue: "English",
                    values: Object.keys(regionalInfo),
                    name: "nativeLanguage",
                    onChange: (val: string[]) => form.values["nativeLanguage"] = val[0]
                }
            ],
            {
                fieldName: "Email",
                defaultValue: "pauuser.work@gmail.com",
                name: "username",
                onChange: form.handleChange
            },
            {
                fieldName: "Password",
                defaultValue: "FilthyHacker24",
                name: "password",
                onChange: form.handleChange,
                type: "password" },
            {
                fieldName: "Repeat password",
                defaultValue: "FilthyHacker24",
                name: "repeatPassword",
                onChange: form.handleChange,
                type: "password"
            },
        ];

    return fields;
}