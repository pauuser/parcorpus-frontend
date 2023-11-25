/**
 * Model for user registration
 * @export
 * @interface UserRegistrationDto
 */
export interface UserRegistrationDto {
    /**
     * User's name
     * @type {string}
     * @memberof UserRegistrationDto
     */
    name: string;

    /**
     * User's surname
     * @type {string}
     * @memberof UserRegistrationDto
     */
    surname: string;

    /**
     * User's email
     * @type {string}
     * @memberof UserRegistrationDto
     */
    email: string;

    /**
     * User's country name
     * @type {string}
     * @memberof UserRegistrationDto
     */
    country_name: string;

    /**
     * User's language short name
     * @type {string}
     * @memberof UserRegistrationDto
     */
    language_short_name: string;

    /**
     * User's password
     * @type {string}
     * @memberof UserRegistrationDto
     */
    password: string;
}
