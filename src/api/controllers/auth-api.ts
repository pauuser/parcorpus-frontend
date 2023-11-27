import { AxiosResponse } from 'axios';
import { LoginDto } from '../dto';
import { TokensDto } from '../dto';
import { UserRegistrationDto } from '../dto';
import { BACKEND_AUTH_ROUTE, BACKEND_URL } from "../../shared/consts.ts";
import axios from "axios";

/**
 * AuthApi client
 * @export
 * @class AuthApi
 */
export class AuthApi {
    private static baseUrl = BACKEND_URL + BACKEND_AUTH_ROUTE;

    /**
     * POST /api/v1/login
     * @summary Login into account
     * @param {LoginDto} [body] Login information
     * @memberof AuthApi
     */
    public async loginPost(body: LoginDto) : Promise<AxiosResponse<TokensDto>> {
        const url = AuthApi.baseUrl + '/login';
        console.log(body.email);
        console.log(body.password);

        return await axios.post(url, body);
    }

    /**
     * POST /api/v1/auth/refresh
     * @summary Refresh token
     * @param {TokensDto} [body] Access token and refresh token
     * @memberof AuthApi
     */
    public async refreshPost(body: TokensDto) : Promise<AxiosResponse<TokensDto>> {
        const url = AuthApi.baseUrl + '/refresh';

        return await axios.post(url, body);
    }

    /**
     * POST /api/v1/auth/register
     * @summary Create new account
     * @param {UserRegistrationDto} [body] Registration information
     * @memberof AuthApi
     */
    public async registerPost(body: UserRegistrationDto) : Promise<AxiosResponse<TokensDto>> {
        const url = AuthApi.baseUrl + '/register';

        return await axios.post(url, body);
    }
}
