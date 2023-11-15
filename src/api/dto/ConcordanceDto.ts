import { ConcordanceItemDto } from './ConcordanceItemDto.ts';
import { PageInfoDto } from './PageInfoDto.ts';

/**
 * Concordance DTO model
 * @export
 * @interface ConcordanceDto
 */
export interface ConcordanceDto {
    /**
     * Paging information
     * @type {PageInfoDto}
     * @memberof ConcordanceDto
     */
    pageInfo: PageInfoDto;

    /**
     * The concordance with respect to paging
     * @type {Array<ConcordanceItemDto>}
     * @memberof ConcordanceDto
     */
    items: Array<ConcordanceItemDto>;
}
