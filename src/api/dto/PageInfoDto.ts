/**
 * Page info DTO
 * @export
 * @interface PageInfoDto
 */
export interface PageInfoDto {
    /**
     * Number of page
     * @type {number}
     * @memberof PageInfoDto
     */
    page: number;

    /**
     * Number of objects on the page
     * @type {number}
     * @memberof PageInfoDto
     */
    count: number;

    /**
     * Total number of pages
     * @type {number}
     * @memberof PageInfoDto
     */
    totalPages: number;

    /**
     * Total number of objects
     * @type {number}
     * @memberof PageInfoDto
     */
    totalCount: number;
}
