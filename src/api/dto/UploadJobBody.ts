/**
 * Upload Job Body
 * @export
 * @interface UploadJobBody
 */
export interface UploadJobBody {
    /**
     * Source language short name
     * @type {string}
     * @memberof UploadJobBody
     */
    sourceLanguageCode: string;

    /**
     * Target language code
     * @type {string}
     * @memberof UploadJobBody
     */
    targetLanguageCode: string;

    /**
     * Text title
     * @type {string}
     * @memberof UploadJobBody
     */
    title: string;

    /**
     * Text author
     * @type {string}
     * @memberof UploadJobBody
     */
    author: string;

    /**
     * Text source
     * @type {string}
     * @memberof UploadJobBody
     */
    source: string;

    /**
     * Text creation year
     * @type {number}
     * @memberof UploadJobBody
     */
    creationYear: number;

    /**
     * Text genres list
     * @type {Array<string>}
     * @memberof UploadJobBody
     */
    genres: Array<string>;

    /**
     * Source language text
     * @type {Blob}
     * @memberof UploadJobBody
     */
    sourceText: Blob;

    /**
     * Target language text
     * @type {Blob}
     * @memberof UploadJobBody
     */
    targetText: Blob;
}
