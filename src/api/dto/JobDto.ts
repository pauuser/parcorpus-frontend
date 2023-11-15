/**
 * Job model DTO
 * @export
 * @interface JobDto
 */
export interface JobDto {
    /**
     * Id
     * @type {string}
     * @memberof JobDto
     */
    jobId: string;

    /**
     * Job status
     * @type {string}
     * @memberof JobDto
     */
    status: JobDtoStatusEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum JobDtoStatusEnum {
    Uploaded = 'uploaded',
    Aligning = 'aligning',
    Saving = 'saving',
    Finished = 'finished',
    Failed = 'failed'
}

