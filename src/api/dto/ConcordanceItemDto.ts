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
    source_word: string;

    /**
     * Aligned word
     * @type {string}
     * @memberof ConcordanceItemDto
     */
    aligned_word: string;

    /**
     * Source text
     * @type {string}
     * @memberof ConcordanceItemDto
     */
    source_text: string;

    /**
     * Aligned translation
     * @type {string}
     * @memberof ConcordanceItemDto
     */
    aligned_translation: string;

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
    creation_year: number;

    /**
     * When the text was added to the database
     * @type {Date}
     * @memberof ConcordanceItemDto
     */
    add_date: Date;
}
