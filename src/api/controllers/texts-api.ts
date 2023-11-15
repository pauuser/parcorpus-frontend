import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
import { BASE_PATH, RequestArgs, BaseAPI, RequiredError } from '../base';
import { ConcordanceDto } from '../dto';
import { FullTextDto } from '../dto';
import { TextsDto } from '../dto';

/**
 * TextsApi - axios parameter creator
 * @export
 */
export const TextsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1TextsConcordanceGet: async (word: string, sourceLanguageShortName: string, targetLanguageShortName: string, page?: number, pageSize?: number, genre?: string, startYear?: Date, endYear?: Date, author?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'word' is not null or undefined
            if (word === null || word === undefined) {
                throw new RequiredError('word','Required parameter word was null or undefined when calling apiV1TextsConcordanceGet.');
            }
            // verify required parameter 'sourceLanguageShortName' is not null or undefined
            if (sourceLanguageShortName === null || sourceLanguageShortName === undefined) {
                throw new RequiredError('sourceLanguageShortName','Required parameter sourceLanguageShortName was null or undefined when calling apiV1TextsConcordanceGet.');
            }
            // verify required parameter 'targetLanguageShortName' is not null or undefined
            if (targetLanguageShortName === null || targetLanguageShortName === undefined) {
                throw new RequiredError('targetLanguageShortName','Required parameter targetLanguageShortName was null or undefined when calling apiV1TextsConcordanceGet.');
            }
            const localVarPath = `/api/v1/texts/concordance`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (word !== undefined) {
                localVarQueryParameter['word'] = word;
            }

            if (sourceLanguageShortName !== undefined) {
                localVarQueryParameter['source_language_short_name'] = sourceLanguageShortName;
            }

            if (targetLanguageShortName !== undefined) {
                localVarQueryParameter['target_language_short_name'] = targetLanguageShortName;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            if (genre !== undefined) {
                localVarQueryParameter['genre'] = genre;
            }

            if (startYear !== undefined) {
                localVarQueryParameter['start_year'] = (startYear as any instanceof Date) ?
                    (startYear as any).toISOString() :
                    startYear;
            }

            if (endYear !== undefined) {
                localVarQueryParameter['end_year'] = (endYear as any instanceof Date) ?
                    (endYear as any).toISOString() :
                    endYear;
            }

            if (author !== undefined) {
                localVarQueryParameter['author'] = author;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get texts uploaded by the user
         * @param {number} [page] Number of requested page (default is 1)
         * @param {number} [pageSize] Size of the requested page (default is 20, but must be between 3 and 50)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1TextsGet: async (page?: number, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v1/texts`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Delete text for the textId
         * @param {number} textId Text id of the text to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1TextsTextIdDelete: async (textId: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'textId' is not null or undefined
            if (textId === null || textId === undefined) {
                throw new RequiredError('textId','Required parameter textId was null or undefined when calling apiV1TextsTextIdDelete.');
            }
            const localVarPath = `/api/v1/texts/{textId}`
                .replace(`{${"textId"}}`, encodeURIComponent(String(textId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Get text by Id
         * @param {number} textId 
         * @param {number} [page] Number of requested page for sentences (default is 1)
         * @param {number} [pageSize] Size of the requested page for sentences (default is 20, but must be between 3 and 50)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV1TextsTextIdGet: async (textId: number, page?: number, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'textId' is not null or undefined
            if (textId === null || textId === undefined) {
                throw new RequiredError('textId','Required parameter textId was null or undefined when calling apiV1TextsTextIdGet.');
            }
            const localVarPath = `/api/v1/texts/{textId}`
                .replace(`{${"textId"}}`, encodeURIComponent(String(textId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication Bearer required
            // http bearer authentication required
            if (configuration && configuration.accessToken) {
                const accessToken = typeof configuration.accessToken === 'function'
                    ? await configuration.accessToken()
                    : await configuration.accessToken;
                localVarHeaderParameter["Authorization"] = "Bearer " + accessToken;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TextsApi - functional programming interface
 * @export
 */
export const TextsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
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
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1TextsConcordanceGet(word: string, sourceLanguageShortName: string, targetLanguageShortName: string, page?: number, pageSize?: number, genre?: string, startYear?: Date, endYear?: Date, author?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<ConcordanceDto>>>> {
            const localVarAxiosArgs = await TextsApiAxiosParamCreator(configuration).apiV1TextsConcordanceGet(word, sourceLanguageShortName, targetLanguageShortName, page, pageSize, genre, startYear, endYear, author, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get texts uploaded by the user
         * @param {number} [page] Number of requested page (default is 1)
         * @param {number} [pageSize] Size of the requested page (default is 20, but must be between 3 and 50)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1TextsGet(page?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<Array<TextsDto>>>> {
            const localVarAxiosArgs = await TextsApiAxiosParamCreator(configuration).apiV1TextsGet(page, pageSize, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Delete text for the textId
         * @param {number} textId Text id of the text to be deleted
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1TextsTextIdDelete(textId: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await TextsApiAxiosParamCreator(configuration).apiV1TextsTextIdDelete(textId, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get text by Id
         * @param {number} textId 
         * @param {number} [page] Number of requested page for sentences (default is 1)
         * @param {number} [pageSize] Size of the requested page for sentences (default is 20, but must be between 3 and 50)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV1TextsTextIdGet(textId: number, page?: number, pageSize?: number, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<FullTextDto>>> {
            const localVarAxiosArgs = await TextsApiAxiosParamCreator(configuration).apiV1TextsTextIdGet(textId, page, pageSize, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};


/**
 * TextsApi
 * @export
 * @class TextsApi
 * @extends {BaseAPI}
 */
export class TextsApi extends BaseAPI {
    /**
     * 
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
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TextsApi
     */
    public async apiV1TextsConcordanceGet(word: string, sourceLanguageShortName: string, targetLanguageShortName: string, page?: number, pageSize?: number, genre?: string, startYear?: Date, endYear?: Date, author?: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<ConcordanceDto>>> {
        return TextsApiFp(this.configuration).apiV1TextsConcordanceGet(word, sourceLanguageShortName, targetLanguageShortName, page, pageSize, genre, startYear, endYear, author, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get texts uploaded by the user
     * @param {number} [page] Number of requested page (default is 1)
     * @param {number} [pageSize] Size of the requested page (default is 20, but must be between 3 and 50)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TextsApi
     */
    public async apiV1TextsGet(page?: number, pageSize?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<Array<TextsDto>>> {
        return TextsApiFp(this.configuration).apiV1TextsGet(page, pageSize, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Delete text for the textId
     * @param {number} textId Text id of the text to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TextsApi
     */
    public async apiV1TextsTextIdDelete(textId: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return TextsApiFp(this.configuration).apiV1TextsTextIdDelete(textId, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get text by Id
     * @param {number} textId 
     * @param {number} [page] Number of requested page for sentences (default is 1)
     * @param {number} [pageSize] Size of the requested page for sentences (default is 20, but must be between 3 and 50)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TextsApi
     */
    public async apiV1TextsTextIdGet(textId: number, page?: number, pageSize?: number, options?: AxiosRequestConfig) : Promise<AxiosResponse<FullTextDto>> {
        return TextsApiFp(this.configuration).apiV1TextsTextIdGet(textId, page, pageSize, options).then((request) => request(this.axios, this.basePath));
    }
}
