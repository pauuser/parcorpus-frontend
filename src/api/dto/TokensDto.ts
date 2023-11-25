/**
 * Token pair DTO
 * @export
 * @interface TokensDto
 */
export interface TokensDto {
    /**
     * Access token
     * @type {string}
     * @memberof TokensDto
     */
    access_token: string;

    /**
     * Refresh token
     * @type {string}
     * @memberof TokensDto
     */
    refresh_token: string;
}
