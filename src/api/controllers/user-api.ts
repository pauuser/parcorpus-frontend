import { AxiosResponse } from 'axios';
import {PatchRequest, SearchHistoryDto} from '../dto';
import { UserDto } from '../dto';
import axios from "axios";
import { BACKEND_URL, BACKEND_USERS_ROUTE } from "../../shared/consts.ts";
import { getAccessToken } from "../../shared/utils.ts"

/**
 * UserApi client
 * @export
 * @class UserApi
 */
export class UserApi {
    private static baseUrl = BACKEND_URL + BACKEND_USERS_ROUTE;

    /**
     * GET /api/v1/users/history
     * @summary Get user's search history
     * @param {number} [page] Number of requested page (default is 1)
     * @param {number} [pageSize] Size of the requested page (default is 20, but must be between 3 and 50)
     * @memberof UserApi
     */
    public async historyGet(page?: number, pageSize?: number) : Promise<AxiosResponse<SearchHistoryDto>> {
        const url = UserApi.baseUrl + '/history';

        return await axios.get(url, {
            params: {
                page: page,
                page_size: pageSize
            },
            withCredentials: true,
            headers: {
                Authorization: getAccessToken()
            }
        });
    }
    
    /**
     * GET /api/v1/users/me
     * @summary Get user information via token
     * @memberof UserApi
     */
    public async meGet() : Promise<AxiosResponse<UserDto>> {
        let url = UserApi.baseUrl + '/me';

        console.log(url)

        return await axios.get(url, {
            withCredentials: true,
            headers: {
                Authorization: getAccessToken()
            }
        });
    }

    /**
     * PATCH /api/v1/users/me
     * @summary Update user with id from token
     * @param {PatchRequest} [patch] Patch documents array
     * @memberof UserApi
     */
    public async mePatch(patch: PatchRequest) : Promise<AxiosResponse<UserDto>> {
        let url = UserApi.baseUrl + '/me';

        return await axios.patch(url, patch, {
            withCredentials: true,
            headers: {
                Authorization: getAccessToken()
            }
        })
    }

    /**
     * GET /api/v1/users/{userId}
     * @summary Get user by Id
     * @param {string} userId
     * @memberof UserApi
     */
    public async userIdGet(userId: string) : Promise<AxiosResponse<UserDto>> {
        let url = UserApi.baseUrl + `/${userId}`;

        return await axios.get(url, {
            withCredentials: true,
            headers: {
                Authorization: getAccessToken()
            }
        });
    }
}
