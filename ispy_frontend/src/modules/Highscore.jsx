import { useState } from "react"
import styles from "./styles/Highscore.module.css"

function Highscore({leaderboard, win}) {

    const [username, setUsername] = useState('')

    const toUpper = (value) => {
        setUsername(value.toUpperCase())

    }

    return (
        <>
            <div className={styles.container}>
                {win ? 
                <div className={styles.formContainer}>
                    <div className={styles.header}>Congrats, you did it!!!</div>
                    <form className={styles.form}>
                        <label htmlFor="name"></label>
                        <input className={styles.input}type="text" name="name" id="name" placeholder="ABC.." maxLength={3} minLength={3} 
                        onChange={(e) => {
                            toUpper(e.target.value)
                        }} value={username}/>
                        <button className={styles.button}>Submit highscore!</button>
                    </form>
                </div> : <></>}
                <div className={styles.header}>Leaderboard:</div>
                <div className={styles.leaderboardContainer}>
                    <ul className={styles.list}>
                        {leaderboard.map((player) => {
                            return (
                            <li key={player.id} className={styles.item}>
                                <span>{player.name}</span>
                                <span className={styles.dots}></span>
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