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
    sourceWord: string;

    /**
     * Aligned translation
     * @type {string}
     * @memberof WordPairDto
     */
    targetWord: string;
}
