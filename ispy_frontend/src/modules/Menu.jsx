import { useState } from 'react'
import styles from './styles/Menu.module.css'



function Menu() {

    const [active, setActive] = useState('clock')

    const clickItem = (item) => {
        if (!item.value) {
            setActive(item.key)
            console.log(`The key is now ${key}`)
        }
        else if (item.goal && item.value !== item.goal) {
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
        { key: "clock", name: "A clock", value: false },
        { key: "birdhouse", name: "A birdhouse", value: true },
        { key: "duck", name: "A duck", value: false },
        { key: "thimbles", name: "Five thimbles", value: 2, goal: 5 },
        { key: "plane", name: "A plane", value: false },
        { key: "fishTruck", name: "Two fish in a truck", value: false },
        { key: "apple", name: "A big red apple", value: true },
        { key: "jeep", name: "A zebra jeep", value: false },
        { key: "stop", name: "STOP", value: false },
        { key: "go", name: "GO", value: false },
        { key: "beeps", name: "BEEP, BEEP, BEEP", value: 3, goal: 3 }
]
    return (
        <>
            <div className={styles.checklist}>
                <ul className={styles.list}>
                    <div className={styles.listTitle}>What do you spy?</div>
                    {checklist.map((item) => {
                        if (typeof item.value === 'number') {
                            return (
                            <li key={item.key}
                                data-text={item.name}
                                className=
                                {[item.value === item.goal ? styles.trueItem : styles.falseItem, 
                                  item.key === active ? styles.activeItem : '', 
                                  styles.item].join(' ')}
                                  onClick={() => {clickItem(item)}}>
                                {`${item.name}`}<div>{`(Found: ${item.value})`}</div>
                            </li>
                            )}
                        else {
                            return (
                            <li key={item.key} 
                                data-text={item.name}
                                className={[item.value ? styles.trueItem : styles.falseItem, 
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