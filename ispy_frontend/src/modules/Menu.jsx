import styles from './styles/Menu.module.css'



function Menu({}) {
    const checklist = [
        { key: "clock", value: false },
        { key: "birdhouse", value: false },
        { key: "duck", value: false },
        { key: "thimbles", value: 0 },
        { key: "plane", value: false },
        { key: "fishTruck", value: false },
        { key: "apple", value: false },
        { key: "jeep", value: false },
        { key: "stop", value: false },
        { key: "go", value: false },
        { key: "beeps", value: 0 }
]
    return (
        <>
            <div className={styles.checklist}>
                <ul className={styles.list}>
                    iSpy Checklist
                    {checklist.map((item) => {
                        <li key={item.key} 
                        className={item.value ? styles.falseItem :
                            styles.trueItem
                        }>{`${item.key}`}</li>

                    }) }
                </ul>

            </div>
        </>
    )

}

export default Menu