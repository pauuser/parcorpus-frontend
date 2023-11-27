import {languagesInverse} from "./regionalInfo.ts";

export const getAccessToken = () => {
    return `Bearer ${localStorage.getItem('access_token')}`
}

export const setAccessToken = (accessToken: string) => {
    localStorage.setItem('access_token', accessToken);
}

export const getRefreshToken = () => {
    return `Bearer ${localStorage.getItem('refresh_token')}`
}

export const setRefreshToken = (refreshToken: string) => {
    localStorage.setItem('refresh_token', refreshToken);
}

export const buildLanguagesString = (srcLanguageShortName: string, destLanguageShortName: string) => {
    return `${languagesInverse[srcLanguageShortName]} → ${languagesInverse[destLanguageShortName]}`;
}

export const buildTextSubtitle = (author: string, srcLanguageShortName: string, destLanguageShortName: string) => {
    return `${author}, ${buildLanguagesString(srcLanguageShortName, destLanguageShortName)}`;
}

export const buildTextTitle = (title: string, year: number) => {
    return `${title} (${year})`;
}

export const buildSentences = (sourceSentence: string, translatedSentence: string) => {
    return `${sourceSentence} - ${translatedSentence}`;
}

export const buildAuthorTitle = (title: string, author: string) => {
    return `${author} (${title})`;
}

export const saveToStorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
}

export const getFromStorage = (key: string) => {
    return localStorage.getItem(key);
}