import { useState, useEffect } from 'react'
import styles from './styles/Menu.module.css'
import Dialog from './Dialog';

const createMessage = (string) => {
    setMessages(prev => {
        const next = [...prev]
        if (next.length === 4) {
            next.shift()
        }
        next.push(`${string}`)
        return next
    })
}


function Menu({ coords }) {
    //internal url
    const apiUrl = import.meta.env.VITE_API_URL;
    //coords passed down from Home
    const { x, y } = coords
    //function for creating messages
    const createMessage = (string) => {
        setMessages(prev => {
            const next = [...prev]
            if (next.length === 4) {
                next.shift()
            }
            next.push(`${string}`)
            return next
        })
    }


    
    
    //selecting an item
    const onClick = async (e ,item) => {
        
        //if no answer is chosen
        if (x === 0 && y === 0) {
            createMessage('Please select an object in the picture..')
            return
        }
        const guess = { key: item.key, x: x, y: y}
        const res = await fetch(`${apiUrl}/checklist`,
            {   method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    guess
                })
             }
        )
        
        //test response
        const data = await res.json()
        console.log(data)
        
        const result = data.found
        console.log(result)
        const key = data.key
        if (item.goal && item.found !== item.goal && result) {
            setChecklist(prev => 
                prev.map(item => 
                    item.key === key ?
                    { ...item, found: item.found + 1}
                    : item
                )
            )
            createMessage(`You found "${item.name}"`)
        }
        else if (!item.found && result) {
            //ask the backend, you found it!
            setChecklist(prev => 
                prev.map(item => 
                    item.key === key ?
                    { ...item, found: result}
                    : item
                )
            )
            createMessage(`You found "${item.name}"!`)
        } 
        //if answer is correct but item was already found
        else if (result ){
            createMessage(`You already found "${item.name}"`)
            console.log('you already found that item')
        } 
        //if item was not found
        else {
            createMessage(`Nothing there, keep looking!`)
            console.log('wrong answer')
        }
    }
    //sending the message list to the dialog window
    const [messages, setMessages]= useState(['Welcome to digital iSpy, start searching!'])
    
    useEffect(() => {
        }, [messages])

    //checklist data
    const [checklist, setChecklist] = useState([])
    useEffect(() => {
        const fetchChecklist = async () => {
            const res = await fetch(`${apiUrl}/checklist`)
            const data = await res.json()
            console.log(data)
            setChecklist(data.checklist)
        }
        fetchChecklist()
    }, [])
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
                                  styles.item].join(' ')}
                                  onClick={(e) => {onClick(e, item, x, y)}}>
                                {`${item.name}`}<div>{`(Found: ${item.found})`}</div>
                            </li>
                            )}
                        else {
                            return (
                            <li key={item.key} 
                                data-text={item.name}
                                className={[item.found ? styles.trueItem : styles.falseItem, 
                                  styles.item].join(' ')
                                  } onClick={(e) => {onClick(e, item, x, y)}}>
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