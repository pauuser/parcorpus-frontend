import { PageInfoDto } from './PageInfoDto.ts';
import { SentenceDto } from './SentenceDto.ts';
import { TextDto } from './TextDto.ts';

/**
 * Text model containing sentences
 * @export
 * @interface FullTextDto
 */
export interface FullTextDto {
    /**
     * Text information without sentences
     * @type {TextDto}
     * @memberof FullTextDto
     */
    text: TextDto;

    /**
     * Paging information
     * @type {PageInfoDto}
     * @memberof FullTextDto
     */
    pageInfo: PageInfoDto;

    /**
     * Sentences
     * @type {Array<SentenceDto>}
     * @memberof FullTextDto
     */
    sentences: Array<SentenceDto>;
}
