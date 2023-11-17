import { AxiosResponse } from 'axios';
import { LoginDto } from '../dto';
import { TokensDto } from '../dto';
import { UserRegistrationDto } from '../dto';
import { AUTH_ROUTE, BACKEND_URL } from "../../shared/consts.ts";
import axios from "axios";

/**
 * AuthApi client
 * @export
 * @class AuthApi
 */
export class AuthApi {
    private static baseUrl = BACKEND_URL + AUTH_ROUTE;

    /**
     * POST /api/v1/login
     * @summary Login into account
     * @param {LoginDto} [body] Login information
     * @memberof AuthApi
     */
    public async loginPost(body: LoginDto) : Promise<AxiosResponse<TokensDto>> {
        let url = AuthApi.baseUrl + '/login';

        return await axios.post(url, body);
    }
    /**
     * POST /api/v1/auth/refresh
     * @summary Refresh token
     * @param {TokensDto} [body] Access token and refresh token
     * @memberof AuthApi
     */
    public async refreshPost(body: TokensDto) : Promise<AxiosResponse<TokensDto>> {
        let url = AuthApi.baseUrl + '/refresh';

        return await axios.post(url, body);
    }
    /**
     * POST /api/v1/auth/register
     * @summary Create new account
     * @param {UserRegistrationDto} [body] Registration information
     * @memberof AuthApi
     */
    public async apiV1AuthRegisterPost(body: UserRegistrationDto) : Promise<AxiosResponse<TokensDto>> {
        let url = AuthApi.baseUrl + '/register';

        return await axios.post(url, body);
    }
}
