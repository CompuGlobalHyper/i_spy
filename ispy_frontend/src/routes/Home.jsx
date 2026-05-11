import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'
import Image from "../assets/ispypic.jpg"
import Background from "../assets/background.png"
import TargetBox from "../modules/TargetBox";
import Menu from "../modules/Menu"


function Home() {
    const [viewTargetBox, setViewTargetBox] = useState(false)
    const [coords, setCoords] = useState( { x: 0, y: 0 })
    
    const handleClick = (e) => {
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
    useEffect(() => {
        console.log(`coords are now ${coords.x} and ${coords.y}`)
        }, [coords]) 

    return (
        <>
            <div className={ styles.bckgrdImageContainer}>
                <img className={ styles.bckgrdImage } src={ Background } alt="" />
                <div className={styles.imageContainer} onClick={handleClick}>
                    { viewTargetBox ? 
                    <>
                        <Menu></Menu>
                        <TargetBox coords={coords}></TargetBox>
                    </>
                     : 
                    <></>}
                    <img className={ styles.image } src={ Image } alt="" />
                </div>
            </div>
            
        </>
    )
}

export default Home