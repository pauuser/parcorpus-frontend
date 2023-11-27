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
    text_id: number;

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
    creation_year: number;

    /**
     * Add date
     * @type {Date}
     * @memberof TextDto
     */
    add_date: Date;

    /**
     * Source language short name
     * @type {string}
     * @memberof TextDto
     */
    source_language: string;

    /**
     * Target language short name
     * @type {string}
     * @memberof TextDto
     */
    target_language: string;

    /**
     * User Id of the user who uploaded the text
     * @type {string}
     * @memberof TextDto
     */
    added_by: string;
}
