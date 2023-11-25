import styles from "./logo.module.css"
import {Link} from "react-router-dom";

export const ParcorpusLogo = () => {
    return (
        <Link className={styles.logo} to="/">
            Parcorpus
        </Link>
    );
};