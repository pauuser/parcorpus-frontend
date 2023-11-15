/**
 * User DTO model
 * @export
 * @interface UserDto
 */
export interface UserDto {
    /**
     * Id (GUID)
     * @type {string}
     * @memberof UserDto
     */
    userId: string;

    /**
     * User's name
     * @type {string}
     * @memberof UserDto
     */
    name: string;

    /**
     * User's surname
     * @type {string}
     * @memberof UserDto
     */
    surname: string;

    /**
     * User's email
     * @type {string}
     * @memberof UserDto
     */
    email: string;

    /**
     * User's country name
     * @type {string}
     * @memberof UserDto
     */
    countryName: string;

    /**
     * Language code
     * @type {string}
     * @memberof UserDto
     */
    nativeLanguageShortName: string;
}
