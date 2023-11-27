/**
 * Word pair DTO
 * @export
 * @interface WordPairDto
 */
export interface WordPairDto {
    /**
     * Source word
     * @type {string}
     * @memberof WordPairDto
     */
    source_word: string;

    /**
     * Aligned translation
     * @type {string}
     * @memberof WordPairDto
     */
    target_word: string;
}
