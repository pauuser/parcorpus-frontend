import { PageInfoDto } from './PageInfoDto.ts';
import { TextDto } from './TextDto.ts';

/**
 * Texts listing model
 * @export
 * @interface TextsDto
 */
export interface TextsDto {
    /**
     * Paging information
     * @type {PageInfoDto}
     * @memberof TextsDto
     */
    pageInfo: PageInfoDto;

    /**
     * The texts
     * @type {Array<TextDto>}
     * @memberof TextsDto
     */
    items: Array<TextDto>;
}
