import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'
import Image from "../assets/ispypic.jpg"
import Background from "../assets/background.png"
import TargetBox from "../modules/TargetBox";
import Menu from "../modules/Menu"


function Home() {
    //internal url
    const apiUrl = import.meta.env.VITE_API_URL;

     //targetbox
    const [viewTargetBox, setViewTargetBox] = useState(false)
    const [coords, setCoords] = useState( { x: 0, y: 0 })

    //function for initializing game on page load
    const initGame = async () => {
        const res = await fetch(`${apiUrl}/reset`)
        const data = await res.json()
        setChecklist(data.checklist)
    }
    //messages

    //sending the message list to the dialog window
    const [messages, setMessages]= useState(['Welcome to digital iSpy, start searching!'])
    useEffect(() => {
        }, [messages])

    //function for creating messages
    const createMessage = (string) => {
        setMessages(prev => {
            const next = [...prev]
            if (next.length === 5) {
                next.shift()
            }
            next.push(`${string}`)
            return next
        })
    }

    //selecting an item
    const onClick = async (e ,item) => {

        const { x, y } = coords
        
        //if no answer is chosen
        if (x === 0 && y === 0) {
            createMessage('Please select an object in the picture..')
            return
        }
        //all of a set has been found
        if (typeof item.found === 'number' && item.found === item.goal) {
            createMessage(`You already found "${item.name}"`)
            return
        }
        //item was already found
        if (typeof item.found === 'boolean' && item.found) {
            createMessage(`You already found that item..`)
            console.log('you already found that item')
            return
        } 
        //guess object
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
        
        //data = {key: string, found: boolean}
        const result = data.found
        const key = data.key

        //item was found and is part of a set
        if (item.goal && item.found !== item.goal && result) {
            fetchChecklist()
            createMessage(`You found "${item.name}"`)
        }
        //item was found and not in a set
        else if (!item.found && result) {
            fetchChecklist()
            createMessage(`You found "${item.name}"`)
        } 
        //if answer is correct but item was already found
        else if (result){
            createMessage(`You already found "${item.name}"`)
            console.log('you already found that item')
        } 
        //if item was not found
        else {
            createMessage(`Nothing there, keep looking!`)
            console.log('wrong answer')
        }
    }
    
    //when picture is clicked
    const handleClick = (e) => {
        if (e.target !== e.currentTarget) {
            return
        }
        if (coords.x !== 0) {
            setCoords({ x: 0, y: 0})
            setViewTargetBox(false)
            console.log('setting viewing to false')
        } else {
            console.log(e.clientX)
            setCoords({ x: e.clientX, y: e.clientY})
            setViewTargetBox(true)
            console.log('setting view to true')
        }
    }

    //update console when coords change
    useEffect(() => {
        console.log(`coords are now ${coords.x} and ${coords.y}`)
        }, [coords]) 

    
    //checklist
    //function for retrieving up-to-date checklist
    const fetchChecklist = async () => {
        const res = await fetch(`${apiUrl}/checklist`)
        const data = await res.json()
        setChecklist(data.checklist)
    }

    //checklist data
    const [checklist, setChecklist] = useState([])
    useEffect(() => {
        initGame()
    }, [])
    

    return (
        <>
            <div className={ styles.bckgrdImageContainer}>
                <img className={ styles.bckgrdImage } src={ Background } alt="" />
                <div className={styles.imageContainer}>
                    <Menu coords={coords} 
                    checklist={checklist}
                    messages={messages} 
                    onClick={onClick}></Menu>
                    { viewTargetBox ? 
                    <>
                        <TargetBox coords={coords} ></TargetBox>
                    </>
                     : 
                    <></>}
                    <img className={ styles.image } src={ Image } alt="" onClick={handleClick}/>
                </div>
            </div>
            
        </>
    )
}

export default Home