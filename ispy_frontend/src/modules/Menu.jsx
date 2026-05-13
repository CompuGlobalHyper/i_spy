import { useState } from 'react'
import styles from './styles/Menu.module.css'



function Menu() {

    const [active, setActive] = useState('clock')

    const clickItem = (item) => {
        if (!item.found) {
            setActive(item.key)
            console.log(`The key is now ${key}`)
        }
        else if (item.goal && item.found !== item.goal) {
            setActive(item.key)
            console.log(`The key is now ${key}`)
        } else console.log('you already found that item')

        
    }

    const unClickItem = () => {
        if (e.target !== e.currentTarget) {
            return
        }
        setActive('')
    }

    const checklist = [
        { key: "clock", name: "A clock", found: false },
        { key: "birdhouse", name: "A birdhouse", found: true },
        { key: "duck", name: "A duck", found: false },
        { key: "thimbles", name: "Five thimbles", found: 2, goal: 5 },
        { key: "plane", name: "A plane", found: false },
        { key: "fishTruck", name: "Two fish in a truck", found: false },
        { key: "apple", name: "A big red apple", found: true },
        { key: "jeep", name: "A zebra jeep", found: false },
        { key: "stop", name: "STOP", found: false },
        { key: "go", name: "GO", found: false },
        { key: "beeps", name: "BEEP, BEEP, BEEP", found: 3, goal: 3 }
]
    return (
        <>
            <div className={styles.checklist}>
                <ul className={styles.list}>
                    <div className={styles.listTitle}>What do you spy?</div>
                    {checklist.map((item) => {
                        if (typeof item.found === 'number') {
                            return (
                            <li key={item.key}
                                data-text={item.name}
                                className=
                                {[item.found === item.goal ? styles.trueItem : styles.falseItem, 
                                  item.key === active ? styles.activeItem : '', 
                                  styles.item].join(' ')}
                                  onClick={() => {clickItem(item)}}>
                                {`${item.name}`}<div>{`(Found: ${item.found})`}</div>
                            </li>
                            )}
                        else {
                            return (
                            <li key={item.key} 
                                data-text={item.name}
                                className={[item.found ? styles.trueItem : styles.falseItem, 
                                  item.key === active ? styles.activeItem : '', 
                                  styles.item].join(' ')
                                  } onClick={() => {clickItem(item)}}>
                                    {item.name}
                            </li>
                            )
                        }
                    }) }
                    <li className={[styles.item, styles.button].join(' ')}>iSpy...!</li>

                </ul>

            </div>
        </>
    )

}

export default Menu