import styles from "../styles/components/Profile.module.css";

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/nandomegale.png" alt="Nando Megale" />
            <div>
                <strong>Nando Megale</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                 </p>
            </div>
        </div>

    );
}