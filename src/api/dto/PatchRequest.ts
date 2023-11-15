import { PatchDocument } from './PatchDocument.ts';

/**
 * Path request body representation
 * @export
 * @interface PatchRequest
 */
export interface PatchRequest extends Array<PatchDocument> {
}
