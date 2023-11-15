/**
 * Filter DTO
 * @export
 * @interface FilterDto
 */
export interface FilterDto {
    /**
     * Genre
     * @type {string}
     * @memberof FilterDto
     */
    genre: string | null;

    /**
     * Start year
     * @type {Date}
     * @memberof FilterDto
     */
    startYear: Date | null;

    /**
     * End year
     * @type {Date}
     * @memberof FilterDto
     */
    endYear: Date | null;

    /**
     * Author's name
     * @type {string}
     * @memberof FilterDto
     */
    author: string | null;
}
