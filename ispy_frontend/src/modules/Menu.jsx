import { useState, useEffect } from 'react'
import styles from './styles/Menu.module.css'
import Dialog from './Dialog';



function Menu() {
    const apiUrl = import.meta.env.VITE_API_URL;
    //selecting an item
    const [active, setActive] = useState('')
    const onClick = async (e ,item) => {
        console.log(item)
        const res = await fetch(`${apiUrl}/checklist`,
            {   method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    item
                })
             }
        )
        //test response
        const result = true
        const key = item.key
        if (!item.found && result) {
            //ask the backend, you found it!
            setChecklist(prev => 
                prev.map(item => 
                    item.key === key ?
                    { ...item, found: result}
                    : item
                )
            )
            //set message
            setMessages(prev => {
                const next = [...prev]
                if (next.length === 4) {
                    next.shift()
                }
                next.push(`You found "${item.name}"`)
                return next
                
            })
        }
        else if (item.goal && item.found !== item.goal) {
            setActive(item.key)
            console.log(`The key is now ${key}`)
        } else console.log('you already found that item') 
    }
    //sending the message list to the dialog window
    const [messages, setMessages]= useState(['Welcome to digital iSpy, start searching!'])
    
    useEffect(() => {
        }, [messages])

    //test checklist data
    const [checklist, setChecklist] = useState(
        [
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
    )
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
                                  onClick={(e) => {onClick(e, item)}}>
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
                                  } onClick={(e) => {onClick(e, item)}}>
                                    {item.name}
                            </li>
                            )
                        }
                    }) }
                    <Dialog messages={ messages }></Dialog>

                </ul>

            </div>
        </>
    )

}

export default Menu