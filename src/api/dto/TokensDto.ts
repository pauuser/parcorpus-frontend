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
    accessToken: string;

    /**
     * Refresh token
     * @type {string}
     * @memberof TokensDto
     */
    refreshToken: string;
}
