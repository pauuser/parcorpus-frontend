import {UserDto} from "../../api";
import styles from "./user-data.module.css";

export function UserData(user: UserDto) {
    return (
        <div className={styles.user_data__container}>
            <span className={styles.user_data__username}>
                {user.name} {user.surname}
            </span>
            <span className={styles.user_data__email}>
                {user.email}
            </span>
        </div>
    );
}