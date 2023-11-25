import { PageInfoDto } from './PageInfoDto.ts';
import { SearchHistoryRecordDto } from './SearchHistoryRecordDto.ts';

/**
 * Search history model with paging
 * @export
 * @interface SearchHistoryDto
 */
export interface SearchHistoryDto {
    /**
     * Paging information
     * @type {PageInfoDto}
     * @memberof SearchHistoryDto
     */
    page_info: PageInfoDto;

    /**
     * The search history
     * @type {Array<SearchHistoryRecordDto>}
     * @memberof SearchHistoryDto
     */
    items: Array<SearchHistoryRecordDto>;
}
