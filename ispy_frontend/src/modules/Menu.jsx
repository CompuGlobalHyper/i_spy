import { useState, useEffect } from 'react'
import styles from './styles/Menu.module.css'
import Dialog from './Dialog';

function Menu({ coords, checklist, messages, onClick }) {
    //coords passed down from Home
    const { x, y } = coords
    

    return (
        <>
            <div className={styles.checklist}>
                <ul className={styles.list}>
                    <div className={styles.listTitle}><span>iSpy Checklist</span></div>
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