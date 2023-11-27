import { JobDto } from '../dto';
import { BACKEND_URL, BACKEND_JOBS_ROUTE } from "../../shared/consts.ts";
import axios, { AxiosResponse } from "axios";
import { getAccessToken } from "../../shared/utils.ts";

/**
 * JobsApi client
 * @export
 * @class JobsApi
 */
export class JobsApi {
    private static baseUrl = BACKEND_URL + BACKEND_JOBS_ROUTE;

    /**
     * GET /api/v1/jobs
     * @summary Get user's latest upload jobs
     * @param {number} [page] Number of requested page (default is 1)
     * @param {number} [pageSize] Size of the requested page (default is 20, but must be between 3 and 50)
     * @memberof JobsApi
     */
    public async jobsGet(page: number, pageSize: number) : Promise<AxiosResponse<Array<JobDto>>> {
        const url = JobsApi.baseUrl;

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
     * GET /api/v1/jobs/{id}
     * @summary Get upload job status
     * @param {string} id Job Id
     * @memberof JobsApi
     */
    public async jobsIdGet(id: string) : Promise<AxiosResponse<JobDto>> {
        const url = JobsApi.baseUrl + `/${id}`;

        return await axios.get(url, {
            withCredentials: true,
            headers: {
                Authorization: getAccessToken()
            }
        });
    }

    /**
     * GET /api/v1/jobs
     * @summary Upload text
     * @param {string} [sourceLanguageCode] 
     * @param {string} [targetLanguageCode] 
     * @param {string} [title] 
     * @param {string} [author] 
     * @param {string} [source] 
     * @param {number} [creationYear] 
     * @param {Array<string>} [genres] 
     * @param {Blob} [sourceText] 
     * @param {Blob} [targetText]
     * @memberof JobsApi
     */
    public async apiV1JobsPostForm(sourceLanguageCode: string,
                                   targetLanguageCode: string,
                                   title: string,
                                   author: string,
                                   source: string,
                                   creationYear: number,
                                   genres: Array<string>,
                                   sourceText: Blob,
                                   targetText: Blob) : Promise<AxiosResponse<JobDto>> {
        const url = JobsApi.baseUrl;

        const formBody = new FormData();
        formBody.append('SourceLanguageCode', sourceLanguageCode);
        formBody.append('TargetLanguageCode', targetLanguageCode);
        formBody.append('Title', title);
        formBody.append('Author', author);
        formBody.append('Source', source);
        formBody.append('CreationYear', creationYear.toString());
        formBody.append('Genres', JSON.stringify(genres));
        formBody.append('SourceText', sourceText);
        formBody.append('TargetText', targetText);

        return await axios.post(url, formBody, {
            withCredentials: true,
            headers: {
                Authorization: getAccessToken()
            }
        });
    }
}
