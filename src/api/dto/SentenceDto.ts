import { WordPairDto } from './WordPairDto.ts';

/**
 * Dto to edit sentence
 * @export
 * @interface SentenceDto
 */
export interface SentenceDto {
    /**
     * Sentence id
     * @type {number}
     * @memberof SentenceDto
     */
    sentence_id: number;

    /**
     * New sentence source text
     * @type {string}
     * @memberof SentenceDto
     */
    source_text: string;

    /**
     * New sentence aligned translation
     * @type {string}
     * @memberof SentenceDto
     */
    aligned_translation: string;

    /**
     * Aligned words in sentence
     * @type {Array<WordPairDto>}
     * @memberof SentenceDto
     */
    words: Array<WordPairDto> ;
}
