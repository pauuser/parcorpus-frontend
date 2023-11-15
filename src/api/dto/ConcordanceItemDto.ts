/**
 * Search result (concordance) DTO model
 * @export
 * @interface ConcordanceItemDto
 */
export interface ConcordanceItemDto {
    /**
     * Source word
     * @type {string}
     * @memberof ConcordanceItemDto
     */
    sourceWord: string;

    /**
     * Aligned word
     * @type {string}
     * @memberof ConcordanceItemDto
     */
    alignedWord: string;

    /**
     * Source text
     * @type {string}
     * @memberof ConcordanceItemDto
     */
    sourceText: string;

    /**
     * Aligned translation
     * @type {string}
     * @memberof ConcordanceItemDto
     */
    alignedTranslation: string;

    /**
     * Source text title
     * @type {string}
     * @memberof ConcordanceItemDto
     */
    title: string;

    /**
     * Author of the text
     * @type {string}
     * @memberof ConcordanceItemDto
     */
    author: string;

    /**
     * Source of the text
     * @type {string}
     * @memberof ConcordanceItemDto
     */
    source: string;

    /**
     * Year of the book creation
     * @type {number}
     * @memberof ConcordanceItemDto
     */
    creationYear: number;

    /**
     * When the text was added to the database
     * @type {Date}
     * @memberof ConcordanceItemDto
     */
    addDate: Date;
}
