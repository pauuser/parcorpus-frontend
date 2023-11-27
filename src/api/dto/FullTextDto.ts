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
     * Paging information
     * @type {PageInfoDto}
     * @memberof FullTextDto
     */
    page_info: PageInfoDto;

    text: {
        /**
         * Text information without sentences
         * @type {TextDto}
         * @memberof FullTextDto
         */
        text: TextDto;

        /**
         * Sentences
         * @type {Array<SentenceDto>}
         * @memberof FullTextDto
         */
        sentences: Array<SentenceDto>;
    }
}
