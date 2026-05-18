import styles from "./styles/Highscore.module.css"

function Highscore({leaderboard, won}) {
    return (
        <>
            <div className={styles.container}>
                {won ? 
                <div className={styles.formContainer}>
                    <div className={styles.header}>Congrats, you did it!!!</div>
                    <form>
                        <label htmlFor="name"></label>
                        <input type="text" name="name" id="name" />
                        <button>Submit highscore!</button>
                    </form>
                </div> : <></>}
                <div className={styles.header}>Leaderboard:</div>
                <div className={styles.leaderboardContainer}>
                    <ul className={styles.list}>
                        {leaderboard.map((player) => {
                            return (
                            <li key={player.id} className={styles.item}>
                                <span>{player.name}</span>
                                <span>{player.points}</span>
                            </li>
                        )})}
                    </ul>
                </div>
            </div>
        </>
    )

}

export default Highscore