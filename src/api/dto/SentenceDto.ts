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
    sentenceId: number;

    /**
     * New sentence source text
     * @type {string}
     * @memberof SentenceDto
     */
    sourceText: string;

    /**
     * New sentence aligned translation
     * @type {string}
     * @memberof SentenceDto
     */
    alignedTranslation: string;

    /**
     * Aligned words in sentence
     * @type {Array<WordPairDto>}
     * @memberof SentenceDto
     */
    words: Array<WordPairDto> ;
}
