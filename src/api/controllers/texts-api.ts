import { AxiosResponse } from 'axios';
import { ConcordanceDto } from '../dto';
import { FullTextDto } from '../dto';
import { TextsDto } from '../dto';
import { BACKEND_URL, BACKEND_TEXTS_ROUTE } from "../../shared/consts.ts";
import axios from "axios";
import { getAccessToken } from "../../shared/utils.ts";

/**
 * TextsApi client
 * @export
 * @class TextsApi
 */
export class TextsApi {
    private static baseUrl = BACKEND_URL + BACKEND_TEXTS_ROUTE;

    /**
     * GET /api/v1/texts/concordance
     * @summary Get word usage examples (word's concordance)
     * @param {string} word Word to search
     * @param {string} sourceLanguageShortName Searched word source language
     * @param {string} targetLanguageShortName Translation will be given in respect to the chosen language
     * @param {number} [page] Number of requested page (default is 1)
     * @param {number} [pageSize] Size of the requested page (default is 20, but must be between 3 and 50)
     * @param {string} [genre] Genre filter (non-required)
     * @param {Date} [startYear] From year included (non-required but if stated - must come in pair with endDateTime)
     * @param {Date} [endYear] To date included (non-required but if stated - must come in pair with startDateTime)
     * @param {string} [author] Author (non-required)
     * @memberof TextsApi
     */
    public async concordanceGet(word: string,
                                sourceLanguageShortName: string,
                                targetLanguageShortName: string,
                                page?: number,
                                pageSize?: number,
                                genre?: string,
                                startYear?: Date,
                                endYear?: Date,
                                author?: string) : Promise<AxiosResponse<Array<ConcordanceDto>>> {
        let url = TextsApi.baseUrl + '/concordance';

        return await axios.get(url, {
            params: {
                Word: word,
                SourceLanguageShortName: sourceLanguageShortName,
                TargetLanguageShortName: targetLanguageShortName,
                "Filter.Genre": genre,
                "Filter.StartYear": startYear,
                "Filter.EndYear": endYear,
                "Filter.Author": author,
                page: page,
                pageSize: pageSize
            },
            withCredentials: true,
            headers: {
                Authorization: getAccessToken()
            }
        });
    }

    /**
     * GET /api/v1/texts/texts
     * @summary Get texts uploaded by the user
     * @param {number} [page] Number of requested page (default is 1)
     * @param {number} [pageSize] Size of the requested page (default is 20, but must be between 3 and 50)
     * @memberof TextsApi
     */
    public async textsGet(page?: number, pageSize?: number) : Promise<AxiosResponse<Array<TextsDto>>> {
        let url = TextsApi.baseUrl + '/texts';

        return await axios.get(url, {
            params: {
                page: page,
                pageSize: pageSize
            },
            withCredentials: true,
            headers: {
                Authorization: getAccessToken()
            }
        });
    }
    /**
     * 
     * @summary Delete text for the textId
     * @param {number} textId Text id of the text to be deleted
     * @memberof TextsApi
     */
    public async textIdDelete(textId: number) : Promise<AxiosResponse<void>> {
        let url = TextsApi.baseUrl + `/texts/${textId}`;

        return await axios.delete(url, {
            withCredentials: true,
            headers: {
                Authorization: getAccessToken()
            }
        });
    }

    /**
     * GET /api/v1/texts/texts/{textId}
     * @summary Get text by Id
     * @param {number} textId 
     * @param {number} [page] Number of requested page for sentences (default is 1)
     * @param {number} [pageSize] Size of the requested page for sentences (default is 20, but must be between 3 and 50)
     * @memberof TextsApi
     */
    public async textIdGet(textId: number, page?: number, pageSize?: number) : Promise<AxiosResponse<FullTextDto>> {
        let url = TextsApi.baseUrl + `/texts/${textId}`;

        return await axios.get(url, {
            params: {
                page: page,
                pageSize: pageSize
            },
            withCredentials: true,
            headers: {
                Authorization: getAccessToken()
            }
        });
    }
}
