import styles from "./profile-icon.module.css"
import {Button, Icon} from "@gravity-ui/uikit";
import {Person} from "@gravity-ui/icons";
import {useNavigate} from "react-router-dom";
import {PROFILE_ROUTE} from "../../shared/consts.ts";

interface ProfileIconParams {
    fullName: string | undefined;
}

export const ProfileIcon = ({ fullName }: ProfileIconParams) => {
    let navigate = useNavigate();
    const routeChange = () => {
        navigate(PROFILE_ROUTE);
    };

    return (
        <div>
            <Button size="xl"
                    view="normal"
                    className={styles.profile__button}
                    onClick={routeChange}>
                <Icon data={Person} className={styles.profile__button__logo}></Icon>
                { fullName }
            </Button>
        </div>
    );
};