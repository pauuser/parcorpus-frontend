import { FilterDto } from './FilterDto.ts';

/**
 * Search history item not wrapped in paging
 * @export
 * @interface SearchHistoryRecordDto
 */
export interface SearchHistoryRecordDto {
    /**
     * Id
     * @type {number}
     * @memberof SearchHistoryRecordDto
     */
    searchHistoryId: number;

    /**
     * User Id
     * @type {string}
     * @memberof SearchHistoryRecordDto
     */
    userId: string;

    /**
     * Word
     * @type {string}
     * @memberof SearchHistoryRecordDto
     */
    word: string;

    /**
     * Source language
     * @type {string}
     * @memberof SearchHistoryRecordDto
     */
    sourceLanguageShortName: string;

    /**
     * Destination language
     * @type {string}
     * @memberof SearchHistoryRecordDto
     */
    destinationLanguageShortName: string;

    /**
     * Filters applied
     * @type {FilterDto}
     * @memberof SearchHistoryRecordDto
     */
    filters: FilterDto | null;

    /**
     * Time of request
     * @type {Date}
     * @memberof SearchHistoryRecordDto
     */
    queryTimestampUtc: Date;
}
