import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { SearchHistoryDto } from '../dto';
import { UserDto } from '../dto';
import axios from "axios";
import {BACKEND_URL, USERS_ROUTE} from "../../shared/consts.ts";

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi {
    /**
     * 
     * @summary Get user's search history
     * @param {number} [page] Number of requested page (default is 1)
     * @param {number} [pageSize] Size of the requested page (default is 20, but must be between 3 and 50)
     * @memberof UserApi
     */
    public async UsersHistoryGet(page?: number, pageSize?: number) : Promise<{ code: number, history: Array<SearchHistoryDto> | null }> {
        try {
            let url = BACKEND_URL + USERS_ROUTE + '/history';
            const response = await axios.get(url, { params: { page: page, pageSize: pageSize }});

            return {code: response.status, history: response.data};
        } catch (err: any) {
            console.log(err);
            if (err.response) {
                return { code: err.response.status, history: null };
            } else {
                throw err;
            }
        }
    }
    /**
     * 
     * @summary Get user information via token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public async apiV1UsersMeGet(options?: AxiosRequestConfig) : Promise<AxiosResponse<UserDto>> {
        return UserApiFp(this.configuration).apiV1UsersMeGet(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Update user with id from token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public async apiV1UsersMePatch(options?: AxiosRequestConfig) : Promise<AxiosResponse<UserDto>> {
        return UserApiFp(this.configuration).apiV1UsersMePatch(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get user by Id
     * @param {string} userId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public async apiV1UsersUserIdGet(userId: string, options?: AxiosRequestConfig) : Promise<AxiosResponse<UserDto>> {
        return UserApiFp(this.configuration).apiV1UsersUserIdGet(userId, options).then((request) => request(this.axios, this.basePath));
    }
}
