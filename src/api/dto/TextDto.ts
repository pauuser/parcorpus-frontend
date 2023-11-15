/**
 * Model for returning text information
 * @export
 * @interface TextDto
 */
export interface TextDto {
    /**
     * Text id
     * @type {number}
     * @memberof TextDto
     */
    textId: number;

    /**
     * Text title
     * @type {string}
     * @memberof TextDto
     */
    title: string;

    /**
     * Text author
     * @type {string}
     * @memberof TextDto
     */
    author: string;

    /**
     * Text source
     * @type {string}
     * @memberof TextDto
     */
    source: string;

    /**
     * Creation year
     * @type {number}
     * @memberof TextDto
     */
    creationYear: number;

    /**
     * Add date
     * @type {Date}
     * @memberof TextDto
     */
    addDate: Date;

    /**
     * Source language short name
     * @type {string}
     * @memberof TextDto
     */
    sourceLanguage: string;

    /**
     * Target language short name
     * @type {string}
     * @memberof TextDto
     */
    targetLanguage: string;

    /**
     * User Id of the user who uploaded the text
     * @type {string}
     * @memberof TextDto
     */
    addedBy: string;
}
