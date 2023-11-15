/**
 * A JSONPatch document as defined by RFC 6902
 * @export
 * @interface PatchDocument
 */
export interface PatchDocument {
    /**
     * The operation to be performed
     * @type {string}
     * @memberof PatchDocument
     */
    op: PatchDocumentOpEnum;

    /**
     * A JSON-Pointer
     * @type {string}
     * @memberof PatchDocument
     */
    path: string;

    /**
     * The value to be used within the operations.
     * @type {any}
     * @memberof PatchDocument
     */
    value?: any;

    /**
     * A string containing a JSON Pointer value.
     * @type {string}
     * @memberof PatchDocument
     */
    from?: string;
}

/**
    * @export
    * @enum {string}
    */
export enum PatchDocumentOpEnum {
    Add = 'add',
    Remove = 'remove',
    Replace = 'replace',
    Move = 'move',
    Copy = 'copy',
    Test = 'test'
}

